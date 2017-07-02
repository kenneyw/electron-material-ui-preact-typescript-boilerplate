import * as React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

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
              <DeleteIcon/>
            </IconButton>
          </Link>
        </div>
      </div>
    );
  }
}
