// @flow
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Piece from './Piece';

type Props = {
  type: string,
  onMoveStart: () => void,
  onMove: (x: number, y: number) => void,
  onMoveEnd: (x: number, y: number) => void
};

export default class MovablePiece extends Component<Props> {
  state = {
    position: {
      x: 0,
      y: 0
    },
    offset: {
      x: 0,
      y: 0
    }
  };

  onMouseDown = e => {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect();
    const midx = x + width / 2;
    const midy = y + height / 2;
    this.setState({ offset: { x: e.pageX - midx, y: e.pageY - midy } });
  };

  onDragStart = (_e, { _x, _y }) => {
    this.props.onMoveStart();
  };

  onDrag = (_e, { x, y }) => {
    const { offset } = this.state;
    this.props.onMove(x + offset.x, y + offset.y);
  };

  onDragStop = (_e, { x, y }) => {
    const { offset } = this.state;
    this.setState({
      offset: { x: 0, y: 0 },
      position: { x: x + offset.x, y: y + offset.y }
    });
    this.props.onMoveEnd(x + offset.x, y + offset.y);
  };

  render() {
    const { type } = this.props;
    const { position, offset } = this.state;

    const dragProps = {
      position,
      onStart: this.onDragStart,
      onDrag: this.onDrag,
      onStop: this.onDragStop
    };

    return (
      <Draggable {...dragProps}>
        <div>
          <div
            onMouseDown={this.onMouseDown}
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          >
            <Piece type={type} />
          </div>
        </div>
      </Draggable>
    );
  }
}
