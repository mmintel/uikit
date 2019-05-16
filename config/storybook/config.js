import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { withContexts } from '@storybook/addon-contexts/vue';

import { contexts } from './contexts';
import center from './decorators/center';

import '../../plugins/vee-validate';
import '../../plugins/vue-click-outside';

addDecorator(center);
addDecorator(withKnobs);
addDecorator(withContexts(contexts));

// automatically import all files ending in *.stories.js
const req = require.context('../../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);