/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { cloneDeep, merge } from 'lodash';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  closeSecurityFlyout,
  closeSecurityFlyoutPanels,
  openSecurityFlyout,
  openSecurityFlyoutPanels,
} from './actions';
import type { SecurityFlyoutState, SecurityFlyoutLayout, SecurityFlyoutReducer } from './model';

export const initialFlyoutsState: SecurityFlyoutState = {};

export const flyoutsReducer = reducerWithInitialState(initialFlyoutsState)
  /**
   * Open the flyout by overriding the state for the given scope.
   */
  .case(openSecurityFlyout, (state, { scope, ...panelProps }) => {
    const newState: SecurityFlyoutReducer = cloneDeep(state);
    newState[scope] = {
      ...panelProps,
    };
    return newState;
  })
  /**
   * Close the flyout by removing the scope from the state.
   */
  .case(closeSecurityFlyout, (state, { scope }) => {
    const newState: SecurityFlyoutReducer = cloneDeep(state);
    delete newState[scope];
    return newState;
  })
  /**
   * Open/add new panels by adding to the state for the given scope.
   */
  .case(openSecurityFlyoutPanels, (state, { scope, ...panelProps }) => {
    return merge({}, state, {
      [scope]: {
        ...panelProps,
      },
    });
  })
  /**
   * Close panels by removing from the state for the given scope.
   */
  .case(closeSecurityFlyoutPanels, (state, { scope, ...panelProps }) => {
    const keys: string[] = Object.keys(panelProps);
    if (!keys || !keys.length) {
      return state;
    }

    const newState: SecurityFlyoutReducer = cloneDeep(state);
    const scopedFlyout: SecurityFlyoutLayout | undefined = newState[scope];
    if (!scopedFlyout) {
      return state;
    }

    keys.forEach((key: string) => delete scopedFlyout[key]);
    return newState;
  })
  .build();
