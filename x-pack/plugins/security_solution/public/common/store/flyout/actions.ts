/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import actionCreatorFactory from 'typescript-fsa';
import type { SecurityFlyoutLayout, SecurityFlyoutAction } from './model';

const actionCreator = actionCreatorFactory('x-pack/security_solution/local/flyout');

export const openSecurityFlyout =
  actionCreator<SecurityFlyoutAction<SecurityFlyoutLayout>>('OPEN_SECURITY_FLYOUT');

export const closeSecurityFlyout =
  actionCreator<SecurityFlyoutAction<SecurityFlyoutLayout>>('CLOSE_SECURITY_FLYOUT');

export const openSecurityFlyoutPanels = actionCreator<SecurityFlyoutAction<SecurityFlyoutLayout>>(
  'OPEN_SECURITY_FLYOUT_PANELS'
);

export const closeSecurityFlyoutPanels = actionCreator<SecurityFlyoutAction<SecurityFlyoutLayout>>(
  'CLOSE_SECURITY_FLYOUT_PANELS'
);
