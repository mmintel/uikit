import Theme from '@/components/theme';

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [
      Theme,
    ],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'Light Theme', props: { type: 'light' }, default: true },
      { name: 'Dark Theme', props: { type: 'dark' } },
    ],
    options: {
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
];