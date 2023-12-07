import React from 'react';
import { Pagination as PaginationType } from '~/types/common';

import * as S from './styled';

type Props = {
  pagination: PaginationType;
  onChange: (page: number) => void;
};

const Pagination = ({ pagination, onChange }: Props) => {
  return (
    <S.Pagination>
      <S.PaginationAction
        onClick={() => onChange(pagination.page - 1)}
        disabled={pagination.page === 1}
        datatype="prev"
      >
        {'< Prev'}
      </S.PaginationAction>
      <S.PaginationAction
        onClick={() => onChange(pagination.page + 1)}
        disabled={!pagination.next}
        datatype="next"
      >
        {'Next >'}
      </S.PaginationAction>
    </S.Pagination>
  );
};

export default Pagination;
