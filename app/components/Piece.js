// @flow

import React from 'react';
import styles from './Piece.css';

type Props = {
  type: string,
  x: number,
  y: number
};

export default function Piece({ type, x = 0, y = 0 }: Props) {
  return (
    <div
      className={styles[type]}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
}
