import Button from './components/button';

const plugin: PluginObject<void> = {
  install(Vue: VueConstructor) {
    Vue.component(Button.name, Button);
  }
};

export default plugin;