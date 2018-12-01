// @flow
import React, { Component } from 'react';
import Square from './Square';
import styles from './Board.css';
import { squareWidth, frameWidth } from '../constants';
import { cssVars } from '../utils';

const files = 'abcdefgh'.split('');
const ranks = '87654321'.split('');

const vars = {
  squareWidth,
  frameWidth,
  boardWidth: squareWidth * 8,
  boardContainerWidth: frameWidth * 2 + squareWidth * 8
};

type Props = {};

export default class Board extends Component<Props> {
  render() {
    const squares = [];
    for (let i = 7; i >= 0; i -= 1) {
      for (let j = 0; j < 8; j += 1) {
        const key = `${files[j]}${i + 1}`;
        squares.push(
          <Square key={key} coord={key} dark={i % 2 ? !!(j % 2) : !(j % 2)} />
        );
      }
    }
    return (
      <div className={styles.container}>
        {cssVars(vars)}
        <div className={styles.board}>{squares}</div>
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
