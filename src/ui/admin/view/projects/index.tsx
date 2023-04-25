import { Box, Paper } from '@mui/material';
import {
	useAllProjectsQuery,
	useCreateProjectMutation,
} from '../../../../api/project';
import { Loader } from '../../../components/common/loader';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { createContext, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../types/common/api/error';
import { ProjectCreateContext } from '../../../../types/common/context/project/create';
import { useNotifySnackbar } from '../../../../hooks/snackbar/use-notify-snackbar';
import { AddProject } from '../../components/view/project/add-project';
import { ProjectSubview } from '../../components/view/project/project-subview';
import { SearchInput } from '../../../components/common/search/input';
import { useDebouncedState } from '../../../../hooks/debounce/use-debounced-state';

export const projectContext = createContext<ProjectCreateContext | null>(null);
const initialValues = {
	name: '',
	description: '',
};
export const Projects = () => {
	const { data = null, isLoading } = useAllProjectsQuery();
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const { showSnackbar } = useNotifySnackbar();
	const [create] = useCreateProjectMutation();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { name, description } = data;
			try {
				const response = await create({ name, description }).unwrap();
				showSnackbar('successfully created ', 'success');
				handleClose();
				formik.resetForm();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().max(30).min(2).required('Name is required'),
			description: Yup.string().min(16).required('Description is required'),
		}),
	});

	const [query, setQuery] = useState('');
	const [debouncedQuery, setDebounceQuery] = useDebouncedState('', 1000);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setDebounceQuery(event.target.value);
	};

	const projectData = useMemo(() => {
		const searchValue = debouncedQuery.toLocaleLowerCase();
		if (!data) {
			return [];
		}

		return data.filter((project) => {
			const { name, description } = project;
			return [name, description].some((value) =>
				value?.toLowerCase().includes(searchValue),
			);
		});
	}, [data, debouncedQuery]);
	const modalArray = [
		{
			title: 'name',
			formikValue: 'name',
		},
		{
			title: 'description',
			formikValue: 'description',
		},
	];

	return (
		<projectContext.Provider value={{ modalArray, formik }}>
			<Box sx={{ p: 2 }}>
				<ViewDefaultPage
					ButtonWithSelectActions={
						<AddProject
							handleClose={handleClose}
							handleOpen={handleOpen}
							open={open}
						/>
					}>
					<Paper sx={{ p: 2, mt: 2 }}>
						<SearchInput inputValue={query} handleChange={handleChange} />
					</Paper>
					{data ? (
						<ProjectSubview data={projectData} />
					) : (
						<Loader isLoading={isLoading} />
					)}
				</ViewDefaultPage>
			</Box>
		</projectContext.Provider>
	);
};
