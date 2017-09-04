import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Layout, IProps } from '../components/Layout';
import * as LayoutActions from '../actions/layout';
import { IState } from '../reducers';

function mapStateToProps(state: IState): Partial<IProps> {
  return {
    position: { x: 0, y: 0},
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IProps> {
  return bindActionCreators(LayoutActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Layout) as any as React.StatelessComponent<IProps>);
