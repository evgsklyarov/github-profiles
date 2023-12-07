import React from 'react';

import * as S from './styled';
import Loader from '~/components/Loader';
import Error from '~/components/Error/Default';

type Props = {
  title: string;
  loading?: boolean;
  error?: boolean;
  errorText?: string;
  children?: React.ReactNode;
};

const Screen = ({ title, children, error, errorText, loading }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    {loading && <Loader />}
    {error && <Error text={errorText} />}
    {children}
  </S.Container>
);

export default Screen;
