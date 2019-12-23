import React from 'react';
import { NOTIFICATION_TYPE_ERROR } from 'react-redux-notify';

export const failedLogin = {
  message: 'Incorrect e-mail or password!',
  type: NOTIFICATION_TYPE_ERROR,
  duration: 0,
  canDismiss: true,
  icon: <i className="fa fa-check" />,
};
