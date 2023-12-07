import React from 'react';
import * as S from './styled';

type Props = {
  value: string;
  label: string;
  placeholder?: string;
  disabed?: boolean;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  onChange: (value: string) => void;
};
const Input = ({
  value,
  label,
  placeholder = 'Enter value',
  disabed = false,
  type = 'text',
  className,
  onChange,
}: Props) => (
  <S.Label className={className}>
    {label}
    <S.Input
      type={type}
      placeholder={placeholder}
      disabled={disabed}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </S.Label>
);

export default Input;
