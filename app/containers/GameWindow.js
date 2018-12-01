import React, { Component } from 'react';
import styles from './GameWindow.css';

import Board from '../components/Board';

export default class GameWindow extends Component {
  render() {
    return (
      <div className={styles.game}>
        <Board />
      </div>
    );
  }
}
