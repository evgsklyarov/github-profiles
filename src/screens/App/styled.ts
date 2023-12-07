import styled from 'styled-components';

import { Paragraph as P } from '~/components/Text';
import { MainButton as B } from '~/components/Button';

export const Paragraph = styled(P)`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const SubmitButton = styled(B)`
  margin-left: 10px;
  width: 100px;
  flex-shrink: 0;
`;
