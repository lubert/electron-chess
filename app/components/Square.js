// @flow
import React from 'react';
import styles from './Square.css';

type Props = {
  children?: React.Node,
  coord: string,
  dark: boolean
};

export default function Square({ children, coord, dark }: Props) {
  const style = dark ? styles.dark : styles.light;
  return (
    <div className={style} coord={coord}>
      {children}
    </div>
  );
}
