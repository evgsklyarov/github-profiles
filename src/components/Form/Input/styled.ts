import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.secondaryText};
  font-size: 14px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 7px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  border: 1px solid ${({ theme: { colors } }) => colors.border};
`;
