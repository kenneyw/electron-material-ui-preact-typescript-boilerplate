import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Rnd from 'react-rnd';
import { Link } from 'react-router-dom';

const styles = require('./Layout.scss');

export interface IProps extends RouteComponentProps<any> {
  move(): void,
  position: { x: number, y: number },
}

const Box = () => (
  <div className={styles.box}>
    <p>Hello</p>
  </div>
);

type DraggableData = {
  node: HTMLElement,
  x: number,
  y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};

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

  handleResizeStop = (e: MouseEvent, dir: String, refToElement: HTMLElement, delta: Number) => {
    console.log('handleResizeStop');
    console.log('e: ', e);
    console.log('dir: ', dir);
    console.log('refToElement: ', refToElement);
    console.log('delta: ', delta);
  };

  handleDragStop = (e: MouseEvent, data: DraggableData) => {
    console.log('handleDragStop');
    console.log('e: ', e);
    console.log('data: ', data);
  };

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 200,
              height: 200,
            }}
            minWidth={100}
            minHeight={100}
            bounds="parent"
            onResizeStop={this.handleResizeStop}
            onDragStop={this.handleDragStop}
          >
            <Box />
          </Rnd>
        </div>
      </div>
    );
  }
}
