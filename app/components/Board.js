// @flow
import React, { Component } from 'react';
import styles from './Board.css';

type SquareProps = {
  dark: boolean,
  coord: string
};

function Square({ dark, coord }: SquareProps) {
  const style = dark ? styles.darkSquare : styles.lightSquare;
  return <div className={style} coord={coord} />;
}

const files = 'abcdefgh'.split('');
const ranks = '87654321'.split('');

type Props = {};

export default class Board extends Component<Props> {
  render() {
    const board = [];
    for (let i = 7; i >= 0; i -= 1) {
      for (let j = 0; j < 8; j += 1) {
        const key = `${files[j]}${i + 1}`;
        board.push(
          <Square key={key} coord={key} dark={i % 2 ? !!(j % 2) : !(j % 2)} />
        );
      }
    }
    return (
      <div className={styles.container}>
        <div className={styles.board}>{board}</div>
        <div className={styles.labels}>
          <div className={styles.files}>
            {files.map(f => (
              <div key={f} className={styles.file}>
                {f}
              </div>
            ))}
          </div>
          <div className={styles.ranks}>
            {ranks.map(r => (
              <div key={r} className={styles.rank}>
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
