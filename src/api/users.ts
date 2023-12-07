import axios from '~/api';
import { CancelToken } from 'axios';

import { GitHubRepo, GitHubUser } from '~/types/user';

export const getUser = (username: string, cancelToken?: CancelToken) =>
  axios.get<GitHubUser>(`/users/${username}`, { cancelToken });

export const getUserRepos = (
  username: string,
  {
    page = 1,
    per_page = 10,
    cancelToken,
  }: { page?: number; per_page?: number; cancelToken?: CancelToken } = {},
) =>
  axios.get<GitHubRepo[]>(`/users/${username}/repos`, {
    params: {
      page,
      per_page,
    },
    cancelToken,
  });

export const getUserStarredRepos = (
  username: string,
  {
    page = 1,
    per_page = 10,
    cancelToken,
  }: { page?: number; per_page?: number; cancelToken?: CancelToken } = {},
) =>
  axios.get<GitHubRepo[]>(`/users/${username}/starred`, {
    params: {
      page,
      per_page,
    },
    cancelToken,
  });
