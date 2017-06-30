import * as React from 'react';
import * as Redux from 'react-redux';
import { History } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

import Routes from '../routes';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

interface IRootType {
  store: Redux.Store<any>;
  history: History
};

export default function Root({ store, history }: IRootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider muiTheme={lightMuiTheme}>
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}
