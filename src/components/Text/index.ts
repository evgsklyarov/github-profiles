import styled, { css } from 'styled-components';

const sharedTitle = css`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.mainText};
`;

const sharedParagraph = css`
  color: ${({ theme: { colors } }) => colors.secondaryText};
`;

const Title = styled.h1`
  ${sharedTitle}
  font-size: 28px;
`;

const Subtitle = styled.h2`
  ${sharedTitle}
  font-size: 22px;
`;

const Paragraph = styled.p`
  ${sharedParagraph}
  font-size: 16px;
`;

const SmallParagraph = styled.p`
  ${sharedParagraph}
  font-size: 14px;
`;

export { Title, Subtitle, Paragraph, SmallParagraph };
