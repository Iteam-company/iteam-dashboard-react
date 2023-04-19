import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls';
import { Project } from '../types/common/api/user/project';
import { baseApiService } from './base-query';

export const projectsApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		allProjects: builder.query<Project[], void>({
			query: () => ({
				url: `${USERS_ENDPOINTS.ALL_PROJECTS}`,
				method: 'GET',
			}),
		}),
		patchProject: builder.query<
			Project,
			Pick<Project, 'id'> & Partial<Project>
		>({
			query: (id, ...patch) => ({
				url: `${USERS_ENDPOINTS.ALL_PROJECTS}/${id}`,
				method: 'PATCH',
				body: patch,
			}),
		}),
	}),
});

export const { useAllProjectsQuery, usePatchProjectQuery } = projectsApiService;
