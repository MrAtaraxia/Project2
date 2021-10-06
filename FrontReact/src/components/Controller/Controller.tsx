import React from 'react';
import styles from './Controller.module.scss';
import Login from '../Login/Login';
import Radium from 'radium';

const Controller = () => (
  <div className={styles.Controller} data-testid="Controller">
    <Login></Login>
  </div>
);

export default Radium(Controller);
