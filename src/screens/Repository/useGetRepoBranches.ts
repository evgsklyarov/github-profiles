import { useState, useEffect } from 'react';
import axios from 'axios';

import { getBranches } from '~/api/repos';
import { Pagination } from '~/types/common';
import { Branch } from '~/types/repository';
import { hasLinkHeaderNext } from '~/utils/common';

const useGetRepoBranches = (username?: string, reponame?: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    per_page: 10,
    next: false,
  });

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      if (!username || !reponame) {
        return;
      }

      try {
        const res = await getBranches(
          username,
          reponame,
          {
            page: pagination.page,
            per_page: pagination.per_page,
          },
          cancelTokenSource.token,
        );
        const hasNextPage = hasLinkHeaderNext(res.headers.link);

        setBranches(res.data);
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
      setBranches([]);
    };
  }, [pagination.page, pagination.per_page, username, reponame]);

  return {
    loading,
    error,
    branches,
    pagination,
    setPagination,
  };
};

export default useGetRepoBranches;
