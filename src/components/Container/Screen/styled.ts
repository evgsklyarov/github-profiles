import styled from 'styled-components';

import { Title as T } from '~/components/Text';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled(T)`
  margin-bottom: 20px;
`;
