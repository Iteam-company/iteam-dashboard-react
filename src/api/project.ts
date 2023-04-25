import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls';
import { ProjectCreate } from '../types/common/api/project/create';
import { Project } from '../types/common/api/user/project';
import { baseApiService } from './base-query';

export const projectsApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		allProjects: builder.query<Project[], void>({
			query: () => ({
				url: `${USERS_ENDPOINTS.ALL_PROJECTS}`,
				method: 'GET',
			}),
			providesTags: (result) => (result ? ['Projects'] : []),
		}),
		createProject: builder.mutation<Project, ProjectCreate>({
			query: (param: ProjectCreate) => ({
				url: `${USERS_ENDPOINTS.ALL_PROJECTS}`,
				method: 'POST',
				body: param,
			}),
			invalidatesTags: ['Projects'],
		}),
		patchProject: builder.mutation<
			Project,
			Pick<Project, 'id'> & Partial<Project>
		>({
			query: (id, ...patch) => ({
				url: `${USERS_ENDPOINTS.ALL_PROJECTS}/${id}`,
				method: 'PATCH',
				body: patch,
			}),
			invalidatesTags: ['Projects'],
		}),
	}),
});

export const {
	useAllProjectsQuery,
	usePatchProjectMutation,
	useCreateProjectMutation,
} = projectsApiService;
