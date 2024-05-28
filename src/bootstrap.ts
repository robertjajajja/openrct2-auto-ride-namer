import { openConfig } from './configuration.view';
import { namer } from './helpers/namer.helpers';

export const bootstrap = (): void => {
  // Write code here that should happen on startup of the plugin.

  // UI related calls
  if (!ui) {
    return;
  }
  ui.registerMenuItem('Auto Ride Namer', () => openConfig());

  namer();
};
