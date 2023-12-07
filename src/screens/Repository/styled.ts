import styled from 'styled-components';
import { Subtitle as S } from '~/components/Text';

export const Content = styled.div`
  width: 100%;
`;

export const TextField = styled(S)`
  margin-bottom: 10px;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  padding: 5px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  color: ${({ theme: { colors } }) => colors.secondaryText};
`;
