import { Loading } from '@alifd/next';
import classnames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

const indicator = (
  <div className={classnames(styles.loadContainer, styles.load)}>
    <div className={styles.loader} />
  </div>
);

const Load = (props: { [key: string]: any }): JSX.Element => {
  return (
    <Loading {...props} indicator={indicator}>
      {props.visible ? null : props.children}
    </Loading>
  );
};

export default Load;
