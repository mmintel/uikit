/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { withContexts } from '@storybook/addon-contexts/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { contexts } from './contexts';
import '../../src/assets/styles/globals/reset.scss';
import '../../src/assets/styles/globals/config.scss';
import '../../src/assets/styles/globals/helpers.scss';
import '../../plugins/vee-validate';
import '../../plugins/vue-click-outside';
import center from './decorators/center';

addDecorator(center);
addDecorator(withKnobs);
addDecorator(withContexts(contexts));

const req = require.context('../../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
