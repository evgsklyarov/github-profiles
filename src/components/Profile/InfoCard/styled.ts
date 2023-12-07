import styled from 'styled-components';
import { SmallParagraph } from '~/components/Text';

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  border: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border-top-left-radius: ${({ theme: { borderRadius } }) =>
    borderRadius.small};
  border-bottom-left-radius: ${({ theme: { borderRadius } }) =>
    borderRadius.small};
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Field = styled(SmallParagraph)`
  margin-bottom: 5px;

  b {
    font-weight: bold;
  }
`;
