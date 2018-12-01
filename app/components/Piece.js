// @flow
import React from 'react';
import Draggable from 'react-draggable';
import styles from './Piece.css';

type Props = {
  type: string,
  x: number,
  y: number
};

export default function Piece({ type, x, y }: Props) {
  return (
    <Draggable>
      <div className={styles[type]} style={{ top: y, left: x }} />
    </Draggable>
  );
}
