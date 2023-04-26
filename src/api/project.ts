import { PROJECT_ENDPOINTS } from '../constants/api/project-endpoints';
import { AssignLeadOfProject } from '../types/common/api/project/assign-client-of-project';
import { AssignClientOfProject } from '../types/common/api/project/assign-lead-of-project';
import { ProjectCreate } from '../types/common/api/project/create';
import { Project } from '../types/common/api/user/project';
import { baseApiService } from './base-query';

export const projectsApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		allProjects: builder.query<Project[], void>({
			query: () => ({
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}`,
				method: 'GET',
			}),
			providesTags: (result) => (result ? ['Projects'] : []),
		}),
		getProjectById: builder.query<Project, string | null>({
			query: (id) => ({
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}/${id}`,
				method: 'GET',
			}),
		}),
		deleteProject: builder.mutation<void, string | null>({
			query: (id) => ({
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Projects'],
		}),
		createProject: builder.mutation<Project, ProjectCreate>({
			query: (param: ProjectCreate) => ({
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}`,
				method: 'POST',
				body: param,
			}),
			invalidatesTags: ['Projects'],
		}),
		assignLeadOfProject: builder.mutation<
			AssignLeadOfProject,
			AssignLeadOfProject
		>({
			query: (param) => ({
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}${PROJECT_ENDPOINTS.ASSIGN_LEAD_OF_PROJECT}`,
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
				url: `${PROJECT_ENDPOINTS.ALL_PROJECTS}/${id}`,
				method: 'PATCH',
				body: patch,
			}),
			invalidatesTags: ['Projects'],
		}),
		assignClientOfProject: builder.mutation<
			AssignClientOfProject,
			AssignClientOfProject
		>({
			query: (param: AssignClientOfProject) => ({
				url: `${PROJECT_ENDPOINTS.ASSIGN_CLIENT_OF_PROJECT}`,
				method: 'POST',
				body: param,
			}),
			invalidatesTags: ['Projects'],
		}),
	}),
});

export const {
	useAllProjectsQuery,
	usePatchProjectMutation,
	useCreateProjectMutation,
	useAssignClientOfProjectMutation,
	useAssignLeadOfProjectMutation,
	useGetProjectByIdQuery,
	useDeleteProjectMutation,
} = projectsApiService;
