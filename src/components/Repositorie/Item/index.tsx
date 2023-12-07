import React from 'react';
import { GitHubRepo } from '~/types/user';

import * as S from './styled';
import { NavLink } from 'react-router-dom';

type Props = {
  repo: GitHubRepo;
  showOwner?: boolean;
  className?: string;
};

const Item = ({ repo, className, showOwner }: Props) => (
  <S.Container className={className}>
    {showOwner && (
      <>
        <S.Name>
          <NavLink to={`/${repo.owner.login}`}>{repo.owner.login}</NavLink>
        </S.Name>
        {' / '}
      </>
    )}
    <S.Name>
      <NavLink to={`/${repo.owner.login}/repo/${repo.name}`}>
        {repo.name}
      </NavLink>
    </S.Name>
  </S.Container>
);

export default Item;
