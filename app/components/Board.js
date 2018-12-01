import React, { Component } from 'react';
import styles from './Board.css';

function Square({ dark }) {
  const style = dark ? styles.darkSquare : styles.lightSquare;
  return <div className={style} />;
}

const rows = ['h','g','f','e','d','c','b','a'];

export default class Board extends Component {
  render() {
    const board = [];
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const key = `${rows[i]}${j + 1}`;
        board.push(
          <Square key={key} name={key} dark={i % 2 ? !(j % 2) : (j % 2)} />
        );
      }
    }
    return (
      <div className={styles.container}>
        <div className={styles.board}>{board}</div>
      </div>
    );
  }
}
