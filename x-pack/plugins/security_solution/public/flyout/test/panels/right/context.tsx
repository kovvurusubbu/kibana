/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { RightPanel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RightDetailsPanelContext {}

export const RightDetailsFlyoutContext = createContext<RightDetailsPanelContext>({});

export type RightDetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<RightPanel['params']>;

export const RightDetailsPanelProvider = ({
  id,
  indexName,
  children,
}: RightDetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <RightDetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </RightDetailsFlyoutContext.Provider>
  );
};

export const useTestDetailsPanelContext = () =>
  useContext<NonNullable<RightDetailsPanelContext>>(RightDetailsFlyoutContext);
