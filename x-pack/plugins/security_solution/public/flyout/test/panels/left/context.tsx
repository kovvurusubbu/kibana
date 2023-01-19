/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { LeftPanel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LeftDetailsPanelContext {}

export const LeftDetailsFlyoutContext = createContext<LeftDetailsPanelContext>({});

export type LeftDetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<LeftPanel['params']>;

export const LeftDetailsPanelProvider = ({
  id,
  indexName,
  children,
}: LeftDetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <LeftDetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </LeftDetailsFlyoutContext.Provider>
  );
};

export const useLeftDetailsPanelContext = () =>
  useContext<NonNullable<LeftDetailsPanelContext>>(LeftDetailsFlyoutContext);
