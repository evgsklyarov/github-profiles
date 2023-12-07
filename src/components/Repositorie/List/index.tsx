import React from 'react';

import * as S from './styled';

type Props = {
  isEmpty: boolean;
  children?: React.ReactNode;
};

const List = ({ isEmpty, children }: Props) => {
  return (
    <S.Container>
      {isEmpty ? <S.Empty>No repositories</S.Empty> : children}
    </S.Container>
  );
};

export default List;
