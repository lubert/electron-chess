import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Board.css';

function Square({ dark, coord }) {
  const style = dark ? styles.darkSquare : styles.lightSquare;
  return <div className={style} coord={coord} />;
}
Square.propTypes = {
  dark: PropTypes.bool.isRequired,
  coord: PropTypes.string.isRequired
};

const files = 'abcdefgh'.split('');
const ranks = '87654321'.split('');

export default class Board extends Component {
  render() {
    const board = [];
    for (let i = 7; i >= 0; i -= 1) {
      for (let j = 0; j < 8; j += 1) {
        const key = `${files[j]}${i + 1}`;
        board.push(
          <Square key={key} coord={key} dark={i % 2 ? j % 2 : !(j % 2)} />
        );
      }
    }
    return (
      <div className={styles.container}>
        <div className={styles.board}>{board}</div>
        <div className={styles.labels}>
          <div className={styles.files}>
            {files.map(f => (
              <div className={styles.file}>{f}</div>
            ))}
          </div>
          <div className={styles.ranks}>
            {ranks.map(r => (
              <div className={styles.rank}>{r}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
