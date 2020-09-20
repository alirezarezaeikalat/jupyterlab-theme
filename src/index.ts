import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for Digitalecospace/jupyterlab-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@Digitalecospace/jupyterlab-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@Digitalecospace/jupyterlab-theme/index.css';

    manager.register({
      name: 'jupyterlab-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
