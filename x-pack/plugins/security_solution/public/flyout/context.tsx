/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { noop } from 'lodash/fp';
import {
  closeSecurityFlyoutPanels,
  openSecurityFlyoutPanels,
} from '../common/store/flyout/actions';
import type { SecurityFlyoutLayout, SecurityFlyoutScope } from '../common/store/flyout/model';

export interface ExpandableFlyoutContext {
  /**
   *
   */
  close: () => void;
  /**
   *
   */
  scope?: SecurityFlyoutScope;
  /**
   *
   */
  panels: SecurityFlyoutLayout;
  /**
   *
   */
  openPanels: (configUpdate: Partial<SecurityFlyoutLayout>) => void;
  /**
   *
   */
  closePanels: (configUpdate: Partial<SecurityFlyoutLayout>) => void;
}

export const ExpandableFlyoutContext = createContext<ExpandableFlyoutContext>({
  close: noop,
  scope: undefined,
  panels: {
    left: undefined,
    right: undefined,
    preview: undefined,
  },
  openPanels: noop,
  closePanels: noop,
});

export interface ExpandableFlyoutProviderProps {
  /**
   *
   */
  close: () => void;
  /**
   *
   */
  scope: SecurityFlyoutScope;
  /**
   *
   */
  layout: SecurityFlyoutLayout;
  /**
   *
   */
  children: React.ReactNode;
}

export const ExpandableFlyoutProvider = ({
  close,
  scope,
  layout,
  children,
}: ExpandableFlyoutProviderProps) => {
  const [panels, setPanels] = useState(layout);
  const dispatch = useDispatch();

  const openPanels = useCallback(
    (openedPanels: Partial<SecurityFlyoutLayout>) =>
      dispatch(openSecurityFlyoutPanels({ scope, ...openedPanels })),
    [dispatch, scope]
  );

  const closePanels = useCallback(
    (closedPanels: Partial<SecurityFlyoutLayout>) => {
      dispatch(closeSecurityFlyoutPanels({ scope, ...closedPanels }));
    },
    [dispatch, scope]
  );

  useEffect(() => setPanels(layout), [layout]);

  const contextValue = useMemo(
    () => ({
      close,
      scope,
      panels,
      openPanels,
      closePanels,
    }),
    [close, scope, panels, openPanels, closePanels]
  );

  return (
    <ExpandableFlyoutContext.Provider value={contextValue}>
      {children}
    </ExpandableFlyoutContext.Provider>
  );
};

export const useExpandableFlyoutContext = () =>
  useContext<NonNullable<ExpandableFlyoutContext>>(ExpandableFlyoutContext);
