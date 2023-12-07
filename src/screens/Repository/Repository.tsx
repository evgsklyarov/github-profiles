import { NavLink, useParams } from 'react-router-dom';

import Screen from '~/components/Container/Screen';
import Pagination from '~/components/Pagination';

import * as S from './styled';
import useGetRepoBranches from './useGetRepoBranches';

export const Repository = () => {
  const { username, reponame } = useParams();

  const { loading, branches, error, pagination, setPagination } =
    useGetRepoBranches(username, reponame);

  return (
    <Screen title="Repositorie" loading={loading} error={error}>
      {branches && (
        <S.Content>
          <S.TextField>
            Repository:{' '}
            <NavLink to={`/${username}/repo/${reponame}`}>{reponame}</NavLink>
          </S.TextField>
          <S.TextField>
            Username: <NavLink to={`/${username}`}>{username}</NavLink>
          </S.TextField>
          <S.TextField>Branches:</S.TextField>
          <S.List>
            {branches.map(branch => (
              <S.Item key={branch.commit.sha}>{`— ${branch.name}`}</S.Item>
            ))}
          </S.List>
          <Pagination
            pagination={pagination}
            onChange={page => setPagination({ ...pagination, page })}
          />
        </S.Content>
      )}
    </Screen>
  );
};
