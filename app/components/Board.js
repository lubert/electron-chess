// @flow
import React, { Component } from 'react';
import MovablePiece from './MovablePiece';
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

const R = 'R';
const N = 'N';
const B = 'B';
const Q = 'Q';
const K = 'K';
const P = 'P';
const r = 'r';
const n = 'n';
const b = 'b';
const q = 'q';
const k = 'k';
const p = 'p';

type Props = {};

export default class Board extends Component<Props> {
  state = {
    board: [
      [r, n, b, q, k, b, n, r],
      [p, p, p, p, p, p, p, p],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [P, P, P, P, P, P, P, P],
      [R, N, B, Q, K, B, N, R]
    ]
  };

  get squares() {
    const squares = [];
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const type = this.state.board[i][j];
        const key = `${files[j]}${8 - i}`;
        squares.push(
          <Square key={key} coord={key} dark={(i + j) % 2 === 1}>
            {type && (
              <MovablePiece
                type={type}
                x={squareWidth * j}
                y={squareWidth * i}
              />
            )}
          </Square>
        );
      }
    }
    return squares;
  }

  render() {
    return (
      <div className={styles.container}>
        {cssVars(vars)}
        <div className={styles.labels}>
          <div className={styles.files}>
            {files.map(file => (
              <div key={file} className={styles.file}>
                {file}
              </div>
            ))}
          </div>
          <div className={styles.ranks}>
            {ranks.map(rank => (
              <div key={rank} className={styles.rank}>
                {rank}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.board}>{this.squares}</div>
      </div>
    );
  }
}
