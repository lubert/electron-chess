// @flow
import React from 'react';
import styles from './Square.css';

type Props = {
  dark: boolean,
  coord: string
};

export default function Square({ dark, coord }: Props) {
  const style = dark ? styles.dark : styles.light;
  return <div className={style} coord={coord} />;
}
