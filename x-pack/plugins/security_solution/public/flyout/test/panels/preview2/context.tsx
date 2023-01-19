/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { Preview2Panel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Preview2DetailsPanelContext {}

export const Preview2DetailsFlyoutContext = createContext<Preview2DetailsPanelContext>({});

export type Preview2DetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<Preview2Panel['params']>;

export const Preview2DetailsPanelProvider = ({
  id,
  indexName,
  children,
}: Preview2DetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <Preview2DetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </Preview2DetailsFlyoutContext.Provider>
  );
};

export const usePreview2DetailsPanelContext = () =>
  useContext<NonNullable<Preview2DetailsPanelContext>>(Preview2DetailsFlyoutContext);
