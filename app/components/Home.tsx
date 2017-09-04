import * as React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Conversant Studio</h2>
          <Link to="/layout">
            <RaisedButton label="Broadcast"/>
          </Link>
          <Link to="/counter">
            <RaisedButton label="Settings"/>
          </Link>
        </div>
      </div>
    );
  }
}
