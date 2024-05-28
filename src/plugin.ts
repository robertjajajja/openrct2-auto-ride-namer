import { bootstrap } from './bootstrap';

registerPlugin({
  name: 'Auto Ride Namer 1.0.0',
  version: '1.0.0',
  authors: ['robertjajajja'],
  type: 'remote',
  licence: 'MIT',
  /**
   * This field determines which OpenRCT2 API version to use. It's best to always use the
   * latest release version, unless you want to use specific versions from a newer develop
   * version. Version 70 equals the v0.4.4 release.
   * @see https://github.com/OpenRCT2/OpenRCT2/blob/v0.4.4/src/openrct2/scripting/ScriptEngine.h#L50
   */
  targetApiVersion: 85,
  main: bootstrap,
});
