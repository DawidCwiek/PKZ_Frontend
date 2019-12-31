import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_SUCCESS } from 'react-redux-notify';

export const failedLogin = {
  message: 'Incorrect e-mail or password!',
  type: NOTIFICATION_TYPE_ERROR,
  duration: 0,
  canDismiss: true,
};

export const faillAddObject = {
  message: 'Filed to add!',
  type: NOTIFICATION_TYPE_ERROR,
  duration: 4000,
  canDismiss: true,
};

export const succesAddObject = {
  message: 'Added successfully!',
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 4000,
  canDismiss: true,
};

export const faillDeleteObject = {
  message: 'Filed to delete!',
  type: NOTIFICATION_TYPE_ERROR,
  duration: 4000,
  canDismiss: true,
};

export const succesDeleteObject = {
  message: 'Delete successfully!',
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 4000,
  canDismiss: true,
};
