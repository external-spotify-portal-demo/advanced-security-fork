/*
 * Copyright 2021 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { EntityContentBlueprint } from '@backstage/plugin-catalog-react/alpha';
import {
  compatWrapper,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';
import { entityContentRouteRef } from '../plugin';

/**
 * @alpha
 */
export const securityInsightsPage: any = EntityContentBlueprint.make({
  name: 'SecurityInsightsPage',
  params: {
    path: '/security-insights',
    title: 'Security Insights',
    filter: 'kind:component',
    routeRef: convertLegacyRouteRef(entityContentRouteRef),
    loader: () => import('../components/SecurityInsightsTab').then(m => 
      compatWrapper(<m.SecurityInsightsTab />)
    ),
  },
});

/**
 * @alpha
 */
export const githubDependabotPage: any = EntityContentBlueprint.make({
  name: 'GithubDependabotPage', 
  params: {
    filter: 'kind:component',
    path: '/github-dependabot',
    title: 'Dependabot Alerts',
    routeRef: convertLegacyRouteRef(entityContentRouteRef),
    loader: () => import('../components/GithubDependabotTab').then(m => 
      compatWrapper(<m.GithubDependabotTab />)
    ),
  },
});
