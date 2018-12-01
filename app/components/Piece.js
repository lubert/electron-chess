// @flow

import React from 'react';
import styles from './Piece.css';

type Props = {
  type: string
};

export default function Piece({ type }: Props) {
  return <div className={styles[type]} />;
}
