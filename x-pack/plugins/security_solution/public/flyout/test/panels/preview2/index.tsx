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
import type { Preview2Panel } from '../../../../common/store/flyout/panel-model';

export const Preview2DetailsPanelKey: Preview2Panel['key'] = 'preview2';

export const Preview2DetailsPanel: React.FC<Preview2Panel> = React.memo(({ path }) => {
  const { closePanels, openPanels } = useExpandableFlyoutContext();

  return (
    <EuiFlexGroup direction="column" css={{ backgroundColor: '#00BFB3', height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiTitle>
          <h2>
            <FormattedMessage id="preview2" defaultMessage="Test preview2 panel" />
          </h2>
        </EuiTitle>
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
          <FormattedMessage id="preview2.left" defaultMessage="Open preview panel" />
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => closePanels({ preview: undefined })}>
          <FormattedMessage id="preview2.close" defaultMessage="Close preview2 panel" />
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

Preview2DetailsPanel.displayName = 'Preview2DetailsPanel';
