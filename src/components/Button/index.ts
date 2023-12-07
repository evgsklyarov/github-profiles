import styled from 'styled-components';

const MainButton = styled.button`
  width: 100%;
  padding: 7px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  background: ${({ theme: { colors } }) => colors.btnBg};
  color: ${({ theme: { colors } }) => colors.btnText};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: ${({ theme: { colors } }) => colors.btnDisabledBg};
  }
`;

const Action = styled.button`
  width: 100%;
  padding: 7px;
  border: none;
  color: ${({ theme: { colors } }) => colors.mainText};
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    cursor: default;
    color: ${({ theme: { colors } }) => colors.secondaryText};
  }
`;

export { MainButton, Action };
