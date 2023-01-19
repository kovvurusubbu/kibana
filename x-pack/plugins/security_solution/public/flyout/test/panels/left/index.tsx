/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiTitle } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import { useExpandableFlyoutContext } from '../../../context';
import type { LeftPanel } from '../../../../common/store/flyout/panel-model';

export const LeftDetailsPanelKey: LeftPanel['key'] = 'left';

export const LeftDetailsPanel: React.FC<LeftPanel> = React.memo(({ path }) => {
  const { closePanels, openPanels } = useExpandableFlyoutContext();

  return (
    <EuiFlexGroup direction="column" css={{ backgroundColor: '#F04E98', height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle>
          <h2>
            <FormattedMessage id="left" defaultMessage="Test left panel" />
          </h2>
        </EuiTitle>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              right: {
                key: 'right',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="left.right" defaultMessage="Open right panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              right: {
                key: 'right2',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="left.right2" defaultMessage="Open right2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              preview: {
                key: 'preview',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="left.preview" defaultMessage="Open preview panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              preview: {
                key: 'preview2',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="left.left" defaultMessage="Open preview2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closePanels({ left: undefined })}>
          <FormattedMessage id="left.close" defaultMessage="Close left panel" />
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

LeftDetailsPanel.displayName = 'LeftDetailsPanel';
