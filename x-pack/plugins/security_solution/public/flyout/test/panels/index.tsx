/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { Right2DetailsPanelProvider } from './right2/context';
import { RightDetailsPanelProvider } from './right/context';
import { PreviewDetailsPanelProvider } from './preview/context';
import { LeftDetailsPanelProvider } from './left/context';
import { Preview2DetailsPanelProvider } from './preview2/context';
import { Left2DetailsPanelProvider } from './left2/context';
import type {
  Left2Panel,
  LeftPanel,
  Preview2Panel,
  PreviewPanel,
  Right2Panel,
  RightPanel,
} from '../../../common/store/flyout/panel-model';
import { RightDetailsPanel, RightDetailsPanelKey } from './right';
import { Right2DetailsPanel, Right2DetailsPanelKey } from './right2';
import { LeftDetailsPanel, LeftDetailsPanelKey } from './left';
import { Left2DetailsPanel, Left2DetailsPanelKey } from './left2';
import { PreviewDetailsPanel, PreviewDetailsPanelKey } from './preview';
import { Preview2DetailsPanel, Preview2DetailsPanelKey } from './preview2';
import type { ExpandableFlyoutProps } from '../../../common/components/expandable_flyout';

export const expandableFlyoutPanels: ExpandableFlyoutProps['panels'] = [
  {
    key: RightDetailsPanelKey,
    width: 500,
    component: (props) => (
      <RightDetailsPanelProvider {...(props as RightPanel).params}>
        <RightDetailsPanel path={props.path as RightPanel['path']} />
      </RightDetailsPanelProvider>
    ),
  },
  {
    key: Right2DetailsPanelKey,
    width: 500,
    component: (props) => (
      <Right2DetailsPanelProvider {...(props as Right2Panel).params}>
        <Right2DetailsPanel path={props.path as Right2Panel['path']} />
      </Right2DetailsPanelProvider>
    ),
  },
  {
    key: LeftDetailsPanelKey,
    width: 1000,
    component: (props) => (
      <LeftDetailsPanelProvider {...(props as LeftPanel).params}>
        <LeftDetailsPanel path={props.path as LeftPanel['path']} />
      </LeftDetailsPanelProvider>
    ),
  },
  {
    key: Left2DetailsPanelKey,
    width: 1000,
    component: (props) => (
      <Left2DetailsPanelProvider {...(props as Left2Panel).params}>
        <Left2DetailsPanel path={props.path as Left2Panel['path']} />
      </Left2DetailsPanelProvider>
    ),
  },
  {
    key: PreviewDetailsPanelKey,
    width: 500,
    component: (props) => (
      <PreviewDetailsPanelProvider {...(props as PreviewPanel).params}>
        <PreviewDetailsPanel path={props.path as PreviewPanel['path']} />
      </PreviewDetailsPanelProvider>
    ),
  },
  {
    key: Preview2DetailsPanelKey,
    width: 500,
    component: (props) => (
      <Preview2DetailsPanelProvider {...(props as Preview2Panel).params}>
        <Preview2DetailsPanel path={props.path as Preview2Panel['path']} />
      </Preview2DetailsPanelProvider>
    ),
  },
];
