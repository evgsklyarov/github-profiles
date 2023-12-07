import { useNavigate } from 'react-router-dom';

import { MainButton } from '~/components/Button';
import Screen from '~/components/Container/Screen';
import * as S from './styled';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Screen title="Oops">
      <S.Title>404</S.Title>
      <S.Paragraph>Page Not Found</S.Paragraph>
      <MainButton onClick={() => navigate('/')}>Go Home</MainButton>
    </Screen>
  );
};
