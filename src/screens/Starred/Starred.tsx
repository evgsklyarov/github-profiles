import { useParams } from 'react-router-dom';

import Screen from '~/components/Container/Screen';
import RepoList from '~/components/Repositorie/List';
import RepoItem from '~/components/Repositorie/Item';
import Pagination from '~/components/Pagination';

import useGetStarredRepos from './useGetStarredRepos';

export const Starred = () => {
  const { username } = useParams();

  const { loading, repos, error, pagination, setPagination } =
    useGetStarredRepos(username);

  const handlePagination = (page: number) => {
    setPagination({
      ...pagination,
      page,
    });
  };
  return (
    <Screen title="Starred Repositories" loading={loading} error={error}>
      {repos && (
        <>
          <RepoList isEmpty={!repos.length}>
            {repos.map(repo => (
              <RepoItem key={repo.id} repo={repo} showOwner />
            ))}
          </RepoList>
          <Pagination pagination={pagination} onChange={handlePagination} />
        </>
      )}
    </Screen>
  );
};
