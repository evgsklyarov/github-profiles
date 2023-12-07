import { useState, useEffect } from 'react';
import axios from 'axios';

import { getUserStarredRepos } from '~/api/users';
import { GitHubRepo } from '~/types/user';
import { hasLinkHeaderNext } from '~/utils/common';
import { Pagination } from '~/types/common';

const useGetStarredRepos = (username?: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    per_page: 10,
    next: false,
  });

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      if (!username) {
        return;
      }

      try {
        const res = await getUserStarredRepos(username, {
          page: pagination.page,
          per_page: pagination.per_page,
          cancelToken: cancelTokenSource.token,
        });
        const hasNextPage = hasLinkHeaderNext(res.headers.link);

        setRepos(res.data);
        setPagination(prev => ({
          page: prev.page,
          per_page: prev.per_page,
          next: hasNextPage,
        }));
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelTokenSource.cancel();
      setLoading(true);
      setError(false);
      setRepos([]);
    };
  }, [pagination.page, pagination.per_page, username]);

  return {
    loading,
    error,
    repos,
    pagination,
    setPagination,
  };
};

export default useGetStarredRepos;
