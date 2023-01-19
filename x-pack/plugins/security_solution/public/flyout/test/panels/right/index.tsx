/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiTitle } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import type { RightPanel } from '../../../../common/store/flyout/panel-model';
import { useExpandableFlyoutContext } from '../../../context';

export const RightDetailsPanelKey: RightPanel['key'] = 'right';

export const RightDetailsPanel: React.FC<RightPanel> = React.memo(({ path }) => {
  const { closePanels, openPanels } = useExpandableFlyoutContext();

  return (
    <EuiFlexGroup direction="column" css={{ backgroundColor: '#07C', height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle>
          <h2>
            <FormattedMessage id="right" defaultMessage="Test right panel" />
          </h2>
        </EuiTitle>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              left: {
                key: 'left',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="right.left" defaultMessage="Open left panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              left: {
                key: 'left2',
                params: {
                  id: '',
                  indexName: '',
                },
              },
            })
          }
        >
          <FormattedMessage id="right.left2" defaultMessage="Open left2 panel" />
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
          <FormattedMessage id="right.preview" defaultMessage="Open preview panel" />
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
          <FormattedMessage id="right.left" defaultMessage="Open preview2 panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton
          onClick={() =>
            openPanels({
              left: {
                key: 'left',
                params: {
                  id: '',
                  indexName: '',
                },
              },
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
          <FormattedMessage id="right.left-preview" defaultMessage="Open left and preview panels" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closePanels({ right: undefined })}>
          <FormattedMessage id="right.close" defaultMessage="Close right panel" />
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

RightDetailsPanel.displayName = 'RightDetailsPanel';
