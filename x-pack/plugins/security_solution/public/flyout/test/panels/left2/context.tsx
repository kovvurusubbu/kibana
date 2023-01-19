/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { Left2Panel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Left2DetailsPanelContext {}

export const Left2DetailsFlyoutContext = createContext<Left2DetailsPanelContext>({});

export type Left2DetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<Left2Panel['params']>;

export const Left2DetailsPanelProvider = ({
  id,
  indexName,
  children,
}: Left2DetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <Left2DetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </Left2DetailsFlyoutContext.Provider>
  );
};

export const useLeft2DetailsPanelContext = () =>
  useContext<NonNullable<Left2DetailsPanelContext>>(Left2DetailsFlyoutContext);
