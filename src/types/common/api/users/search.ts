import { Criteries } from '../../../admin/users/criteries';
import { GetPipeType } from '../../../admin/users/pipe-type';

export interface SearchProps {
	pipeType?: GetPipeType.FILTER;
	critery?: Criteries;
	value?: string;
	page?: string;
	limit?: string;
}
