import axios from '~/api';
import { CancelToken } from 'axios';
import { Pagination } from '~/types/common';
import { Branch } from '~/types/repository';

export const getBranches = (
  username: string,
  reponame: string,
  params: Pagination,
  cancelToken?: CancelToken,
) =>
  axios.get<Branch[]>(`/repos/${username}/${reponame}/branches`, {
    params,
    cancelToken,
  });
