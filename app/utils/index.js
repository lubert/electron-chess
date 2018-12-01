import { isNumber, reduce } from 'lodash';
import React from 'react';

export function cssVars(obj, elem = 'root') {
  return (
    <style>
      {`:${elem} { ${reduce(
        obj,
        (acc, v, k) => acc + `--${k}:${v}${isNumber(v) ? 'px' : ''};`,
        ''
      )} }`}
    </style>
  );
}
