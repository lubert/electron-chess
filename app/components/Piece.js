// @flow
import React from 'react';
import './Piece.css';

type Props = {
  type: string
};

const imgMap = {
  K: require('../img/2d/wk.svg'),
  Q: require('../img/2d/wq.svg'),
  B: require('../img/2d/wb.svg'),
  N: require('../img/2d/wn.svg'),
  R: require('../img/2d/wr.svg'),
  P: require('../img/2d/wp.svg'),
  k: require('../img/2d/bk.svg'),
  q: require('../img/2d/bq.svg'),
  b: require('../img/2d/bb.svg'),
  n: require('../img/2d/bn.svg'),
  r: require('../img/2d/br.svg'),
  p: require('../img/2d/bp.svg')
};

export default function Piece({ type }: Props) {
  const img = imgMap[type];
  if (!img) return null;

  return <img src={img} alt={type} />;
}
