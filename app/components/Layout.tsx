import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const Draggable: any = require('react-draggable');

const styles = require('./Layout.scss');

export interface IProps extends RouteComponentProps<any> {
  move(): void,
  position: { x: number, y: number },
}

export class Layout extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
    this.state = {
      activeDrags: 0
    };
  }

  handleStart = (e: MouseEvent, data: Object) => {
    console.log('handleStart');
    console.log('Event: ', event);
    console.log('Data: ', data);
  }

  handleStop = (e: MouseEvent, data: Object) => {
    console.log('handleStart');
    console.log('Event: ', event);
    console.log('Data: ', data);
    this.setState({ position: { x: 0, y: 0 } });
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Draggable
          axis="both"
          bounds="parent"
          handle=".handle"
          onStart={this.handleStart}
          onStop={this.handleStop}
          >
          <div>
            <div className={`handle ${styles.handle}`}>Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
      </div>
    );
  }
}
