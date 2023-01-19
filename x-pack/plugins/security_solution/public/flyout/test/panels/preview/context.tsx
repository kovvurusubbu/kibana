/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useContext } from 'react';
import type { PreviewPanel } from '../../../../common/store/flyout/panel-model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PreviewDetailsPanelContext {}

export const PreviewDetailsFlyoutContext = createContext<PreviewDetailsPanelContext>({});

export type PreviewDetailsPanelProviderProps = {
  children: React.ReactNode;
} & Partial<PreviewPanel['params']>;

export const PreviewDetailsPanelProvider = ({
  id,
  indexName,
  children,
}: PreviewDetailsPanelProviderProps) => {
  const contextValue = {};

  return (
    <PreviewDetailsFlyoutContext.Provider value={contextValue}>
      {children}
    </PreviewDetailsFlyoutContext.Provider>
  );
};

export const usePreviewDetailsPanelContext = () =>
  useContext<NonNullable<PreviewDetailsPanelContext>>(PreviewDetailsFlyoutContext);
