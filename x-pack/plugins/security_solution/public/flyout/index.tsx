/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandableFlyoutProvider } from './context';
import { ExpandableFlyout } from '../common/components/expandable_flyout';
import { flyoutsSelector } from '../common/store/flyout/selectors';
import { closeSecurityFlyout } from '../common/store/flyout/actions';
import type { SecurityFlyoutScope } from '../common/store/flyout/model';

export interface SecurityFlyoutProps {
  /**
   *
   */
  className?: string;
  /**
   * We'll have multiple flyout throughout Kibana (see {@link SecurityFlyoutScope})
   */
  scope: SecurityFlyoutScope;
  /**
   * Allows developers to run code on close action
   */
  handleOnClose?: () => void;
}

/**
 * Flyout intended to be used for the entire Security Solution plugin. This flyout has 3 main sections:
 * - a left section
 * - a right section
 * - a preview section
 * Each section can display a panel, with a certain width.
 * The panel's information are saved in the url to display the flyout identically after refresh.
 */
export const SecurityFlyout = React.memo(
  ({ scope, handleOnClose, className }: SecurityFlyoutProps) => {
    const dispatch = useDispatch();
    const flyouts = useSelector(flyoutsSelector);

    const scopedFlyout = useMemo(() => flyouts[scope], [flyouts, scope]);

    const close = useCallback(() => {
      if (handleOnClose) handleOnClose();
      dispatch(closeSecurityFlyout({ scope }));
    }, [dispatch, scope, handleOnClose]);

    if (!scopedFlyout) return null;

    return (
      <ExpandableFlyoutProvider scope={scope} close={close} layout={scopedFlyout}>
        <ExpandableFlyout className={className} panels={[]} onClose={close} />
      </ExpandableFlyoutProvider>
    );
  }
);

SecurityFlyout.displayName = 'SecurityFlyout';
