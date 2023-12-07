import React from 'react';

import * as S from './styled';
import { Profile } from '~/types/user';
import { NavLink } from 'react-router-dom';

type Props = {
  profile: Profile;
};
const InfoCard = ({ profile: { login, avatar } }: Props) => {
  return (
    <S.Container>
      <S.Avatar src={avatar} />
      <S.Content>
        <S.Field>
          <b>Username:</b> {login}
        </S.Field>
        <S.Field>
          <b>Stars:</b> <NavLink to={`/${login}/starred`}>See</NavLink>
        </S.Field>
      </S.Content>
    </S.Container>
  );
};

export default InfoCard;
