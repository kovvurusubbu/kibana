/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

interface SecurityFlyoutPanel {
  /**
   * Unique key to identify the panel
   */
  key?: string;
  /**
   * Any parameters necessary for the initial requests within the flyout
   */
  params?: Record<string, unknown>;
  /**
   * Tracks the path for what to show in a panel. We may have multiple tabs or details..., so easiest to just use a stack
   */
  path?: string[];
  /**
   * Tracks visual state such as whether the panel is collapsed
   */
  state?: Record<string, unknown>;
}
export interface RightPanel extends SecurityFlyoutPanel {
  key?: 'right';
  params?: {
    id: string;
    indexName: string;
  };
}
export interface Right2Panel extends SecurityFlyoutPanel {
  key?: 'right2';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface LeftPanel extends SecurityFlyoutPanel {
  key?: 'left';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface Left2Panel extends SecurityFlyoutPanel {
  key?: 'left2';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface PreviewPanel extends SecurityFlyoutPanel {
  key?: 'preview';
  params?: {
    id: string;
    indexName: string;
  };
}

export interface Preview2Panel extends SecurityFlyoutPanel {
  key?: 'preview2';
  params?: {
    id: string;
    indexName: string;
  };
}
