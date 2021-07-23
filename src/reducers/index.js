import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import investment from './investment';

const reducers=combineReducers({ posts, auth, investment });

export default reducers