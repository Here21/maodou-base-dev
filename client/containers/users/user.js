import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker, withLifecycle} from 'react-komposer-plus';

import User from '../../components/users/user';

export default composeAll(
  useDeps()
)(User);
