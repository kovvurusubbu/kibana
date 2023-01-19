/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import type { EuiFlyoutProps } from '@elastic/eui';
import { EuiFlexGroup, EuiFlexItem, EuiFlyout } from '@elastic/eui';
import { useExpandableFlyoutContext } from '../../../flyout/context';
import type { SecurityFlyoutPanel } from '../../store/flyout/model';

export interface ExpandableFlyoutPanel {
  /**
   * Unique key used to identify the panel
   */
  key?: string;
  /**
   * Component to be rendered
   */
  component: (props: SecurityFlyoutPanel) => React.ReactElement; // TODO: generalize SecurityFlyoutPanel to allow it to work in any solution
  /**
   * Width used when rendering the panel
   */
  width: number;
}

export interface ExpandableFlyoutProps extends EuiFlyoutProps {
  /**
   * List of panels available for render
   */
  panels: ExpandableFlyoutPanel[];
}

export const ExpandableFlyout: React.FC<ExpandableFlyoutProps> = ({ panels, ...flyoutProps }) => {
  const context = useExpandableFlyoutContext();
  const { left, right, preview } = context.panels;

  const leftSection = useMemo(
    () => panels.find((panel) => panel.key === left?.key),
    [left, panels]
  );

  const rightSection = useMemo(
    () => panels.find((panel) => panel.key === right?.key),
    [right, panels]
  );

  const previewSection = useMemo(
    () => panels.find((panel) => panel.key === preview?.key),
    [preview, panels]
  );

  const width: number = (leftSection?.width ?? 0) + (rightSection?.width ?? 0);

  return (
    <EuiFlyout
      css={css`
        overflow-y: scroll;
      `}
      {...flyoutProps}
      size={width}
      ownFocus={false}
    >
      <EuiFlexGroup
        direction={leftSection ? 'row' : 'column'}
        wrap={false}
        gutterSize="none"
        style={{ height: '100%' }}
      >
        {leftSection && left ? (
          <EuiFlexItem grow>
            <EuiFlexGroup direction="column" style={{ maxWidth: leftSection.width, width: 'auto' }}>
              {leftSection.component({ ...left })}
            </EuiFlexGroup>
          </EuiFlexItem>
        ) : null}
        {rightSection && right ? (
          <EuiFlexItem grow={false} style={{ height: '100%' }}>
            <EuiFlexGroup direction="column" style={{ width: rightSection.width }}>
              {rightSection.component({ ...right })}
            </EuiFlexGroup>
          </EuiFlexItem>
        ) : null}
      </EuiFlexGroup>

      {previewSection && preview ? (
        <div
          style={{
            position: 'absolute',
            top: '8px',
            bottom: '0px',
            right: '8px',
            left: leftSection ? `${leftSection.width + 8}px` : '8px',
            borderRadius: '6px 6px 0px 0px',
          }}
        >
          {previewSection.component({ ...preview })}
        </div>
      ) : null}
    </EuiFlyout>
  );
};
