// @flow
import cx from 'classnames';
import React from 'react';
import styles from './Square.css';

type Props = {
  children?: React.Node,
  coord: string,
  dark: boolean,
  highlight: ?string
};

export default function Square({ children, coord, dark, highlight }: Props) {
  const style = dark ? styles.dark : styles.light;
  return (
    <div className={cx(style, styles[highlight])} coord={coord}>
      {children}
    </div>
  );
}
