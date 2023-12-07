import { useState, useEffect } from 'react';
import axios from 'axios';

import { getUser, getUserRepos } from '~/api/users';
import { Profile } from '~/types/user';

const useGetProfileInfo = (username?: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      if (!username) {
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const [{ data: user }, { data: repos }] = await Promise.all([
          getUser(username, cancelTokenSource.token),
          getUserRepos(username, { cancelToken: cancelTokenSource.token }),
        ]);

        setProfile({
          login: user.login,
          avatar: user.avatar_url,
          repos,
        });
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
      setProfile(null);
      setError(false);
    };
  }, [username]);

  return {
    loading,
    error,
    profile,
  };
};

export default useGetProfileInfo;
