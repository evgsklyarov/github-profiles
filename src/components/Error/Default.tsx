import React from 'react';

import { Paragraph } from '~/components/Text';

type Props = {
  text?: string;
};

const Default = ({ text = 'Something wrong. Try reload page' }: Props) => (
  <Paragraph>{text}</Paragraph>
);

export default Default;
