/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export type SecurityFlyoutScope = 'global' | 'timeline';

export type SecurityFlyoutPanel = Record<string | number, never>; // Empty object

export interface SecurityFlyoutLayout {
  left?: SecurityFlyoutPanel;
  right?: SecurityFlyoutPanel;
  preview?: SecurityFlyoutPanel;
}

export interface SecurityFlyoutReducer {
  global?: SecurityFlyoutLayout;
  timeline?: SecurityFlyoutLayout;
}

export type SecurityFlyoutState = SecurityFlyoutReducer;

export type SecurityFlyoutAction<T = {}> = {
  scope: SecurityFlyoutScope;
} & T;
