import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '~/components/Form/Input';
import Screen from '~/components/Container/Screen';
import * as S from './styled';

export const App = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const onChange = (e: string) => {
    setUserName(e.trim());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName.length) {
      navigate(`/${userName}`);
    }
  };

  return (
    <Screen title="GitHub Profiles">
      <S.Paragraph>Find the profile you are interested</S.Paragraph>
      <S.Form onSubmit={onSubmit}>
        <Input
          label="Username"
          value={userName}
          onChange={onChange}
          placeholder="Enter username"
        />
        <S.SubmitButton disabled={!userName.length}>Search</S.SubmitButton>
      </S.Form>
    </Screen>
  );
};
