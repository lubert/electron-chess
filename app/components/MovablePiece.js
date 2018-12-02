// @flow
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Piece from './Piece';

type Props = {
  type: string
};

export default class MovablePiece extends Component<Props> {
  state = {
    x: 0,
    y: 0
  };

  onMouseDown = e => {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect();
    const mid = { x: x + width / 2, y: y + height / 2 };
    const mouse = { x: e.pageX, y: e.pageY };
    this.setState({ x: mouse.x - mid.x, y: mouse.y - mid.y });
  };

  render() {
    const { type } = this.props;
    const { x, y } = this.state;

    return (
      <Draggable>
        <div>
          <div
            onMouseDown={this.onMouseDown}
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <Piece type={type} />
          </div>
        </div>
      </Draggable>
    );
  }
}
