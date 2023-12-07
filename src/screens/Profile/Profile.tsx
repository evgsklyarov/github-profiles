import { useParams } from 'react-router-dom';

import InfoCard from '~/components/Profile/InfoCard';
import RepoList from '~/components/Repositorie/List';
import RepoItem from '~/components/Repositorie/Item';
import Screen from '~/components/Container/Screen';

import * as S from './styled';
import useGetProfileInfo from './useGetProfileInfo';

export const Profile = () => {
  const { username } = useParams();
  const { loading, profile, error } = useGetProfileInfo(username);
  console.log('loading', loading);
  console.log('profile', profile);
  return (
    <Screen title="User Profile" loading={loading} error={error}>
      {profile && (
        <>
          <InfoCard profile={profile} />
          <S.SubTitle>Repositories</S.SubTitle>
          <RepoList isEmpty={!profile.repos.length}>
            {profile.repos.map(repo => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </RepoList>
        </>
      )}
    </Screen>
  );
};
