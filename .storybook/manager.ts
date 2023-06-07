import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

import theme from './playground-theme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  showToolbar: true,
  theme: theme,
  panelPosition: 'right',
  enableShortcuts: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    /* collapsedRoots: ["theme"], */
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});
