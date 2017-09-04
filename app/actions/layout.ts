import { actionCreatorVoid } from './helpers';

export const moveAction = actionCreatorVoid('MOVE_WINDOW');

export function move() {
  moveAction();
}
