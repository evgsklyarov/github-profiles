import styled from 'styled-components';
import { Subtitle } from '~/components/Text';

export const Container = styled.li`
  padding: 10px;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.border};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Name = styled(Subtitle)``;
