/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useEffect, useState } from 'react';
import { ControlGroupContainer, CONTROL_GROUP_TYPE } from '@kbn/controls-plugin/public';
import { ViewMode } from '@kbn/embeddable-plugin/public';
import { Filter, TimeRange, compareFilters } from '@kbn/es-query';
import { isEqual } from 'lodash';
import { LazyControlsRenderer } from './lazy_controls_renderer';
import { useControlPanels } from '../hooks/use_control_panels_url_state';

interface Props {
  timeRange: TimeRange;
  dataViewId: string;
  filters: Filter[];
  query: {
    language: string;
    query: string;
  };
  setPanelFilters: React.Dispatch<React.SetStateAction<null | Filter[]>>;
}

// Disable refresh, allow our timerange changes to refresh the embeddable.
const REFRESH_CONFIG = {
  pause: true,
  value: 0,
};

export const ControlsContent: React.FC<Props> = ({
  timeRange,
  dataViewId,
  query,
  filters,
  setPanelFilters,
}) => {
  const [controlPanel, setControlPanels] = useControlPanels(dataViewId);
  const [controlGroup, setControlGroup] = useState<ControlGroupContainer | undefined>();

  useEffect(() => {
    if (!controlGroup) {
      return;
    }
    if (
      !isEqual(controlGroup.getInput().timeRange, timeRange) ||
      !compareFilters(controlGroup.getInput().filters ?? [], filters) ||
      !isEqual(controlGroup.getInput().query, query)
    ) {
      controlGroup.updateInput({
        timeRange,
        query,
        filters,
      });
    }
  }, [query, filters, controlGroup, timeRange]);

  return (
    <LazyControlsRenderer
      getCreationOptions={async ({ addDataControlFromField }) => ({
        id: dataViewId,
        type: CONTROL_GROUP_TYPE,
        timeRange,
        refreshConfig: REFRESH_CONFIG,
        viewMode: ViewMode.VIEW,
        filters: [...filters],
        query,
        chainingSystem: 'HIERARCHICAL',
        controlStyle: 'oneLine',
        defaultControlWidth: 'small',
        panels: controlPanel,
      })}
      onEmbeddableLoad={(newControlGroup) => {
        setControlGroup(newControlGroup);
        newControlGroup.onFiltersPublished$.subscribe((newFilters) => {
          setPanelFilters([...newFilters]);
        });
        newControlGroup.getInput$().subscribe(({ panels, filters: currentFilters }) => {
          setControlPanels(panels);
          if (currentFilters?.length === 0) {
            setPanelFilters([]);
          }
        });
      }}
    />
  );
};
