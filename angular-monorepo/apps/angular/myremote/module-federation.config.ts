import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'myremote',
  exposes: {
    './Routes': 'apps/angular/myremote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
