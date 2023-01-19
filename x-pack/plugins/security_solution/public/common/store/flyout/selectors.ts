/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { createSelector } from 'reselect';
import type { State } from '../types';
import type { SecurityFlyoutState } from './model';

const selectFlyouts = (state: State): SecurityFlyoutState => state.flyouts;

export const flyoutsSelector = createSelector(
  selectFlyouts,
  (flyouts: SecurityFlyoutState) => flyouts
);

export const globalFlyoutSelector = createSelector(
  flyoutsSelector,
  (flyouts: SecurityFlyoutState) => flyouts.global
);

export const timelineFlyoutSelector = createSelector(
  flyoutsSelector,
  (flyouts: SecurityFlyoutState) => flyouts.timeline
);
