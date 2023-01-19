/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { Right2Panel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Right2DetailsPanelContext {}

export const Right2DetailsFlyoutContext = createContext<Right2DetailsPanelContext>({});

export type Right2DetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<Right2Panel['params']>;

export const Right2DetailsPanelProvider = ({
  id,
  indexName,
  children,
}: Right2DetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <Right2DetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </Right2DetailsFlyoutContext.Provider>
  );
};

export const useTestDetailsPanelContext = () =>
  useContext<NonNullable<Right2DetailsPanelContext>>(Right2DetailsFlyoutContext);
