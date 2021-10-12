import Load from '@/components/Load';
import SvgIcon from '@/components/SvgIcon';
import React from 'react';
import 'virtual:svg-icons-register';
import styles from './index.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <div>
        <SvgIcon name="layout-notice-none" />
      </div>
      <br />
      <div>
        <SvgIcon name="layout-user-anonymous" />
      </div>
      <br />
      <div>
        <Load className={styles.load} visible />
      </div>
    </div>
  );
};

export default Home;
