import * as React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Alarm from 'react-material-design-icons/icons/Alarm';

const styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">
            <RaisedButton label="Counter"/>
          </Link>
          <Link to="/counter">
            <IconButton>
              <Alarm color="red"/>
            </IconButton>
          </Link>
          <Link to="">
            <IconButton disabled>
              <Alarm color="blue"/>
            </IconButton>
          </Link>
        </div>
      </div>
    );
  }
}
