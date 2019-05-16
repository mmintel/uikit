import { shallowMount } from '@vue/test-utils';
import Button from './button';

describe('Button Component', () => {
  describe('#rendering', () => {
    it('renders correctly', () => {
      const wrapper = shallowMount(Button);
      expect(wrapper.element).toMatchSnapshot();
    });
    it('sets the classes to the element', () => {
      const wrapper = shallowMount(Button, {
        computed: {
          classes: () => 'test',
        },
      });
      expect(wrapper.classes()).toContain('test');
    });
  });

  // describe('#props', () => {
  //   it('complains when wrong `type` is passed', () => {
  //     global.console = { warn: jest.fn(), error: jest.fn() };
  //     shallowMount(Button, {
  //       propsData: {
  //         type: 'something',
  //       },
  //     });
  //     expect(console.warn).toHaveBeenCalledTimes(1);
  //     expect(console.error).toHaveBeenCalledTimes(1);
  //   });
  //   it('complains when wrong `size` is passed', () => {
  //     global.console = { warn: jest.fn(), error: jest.fn() };
  //     shallowMount(Button, {
  //       propsData: {
  //         size: 'something',
  //       },
  //     });
  //     expect(console.warn).toHaveBeenCalledTimes(1);
  //     expect(console.error).toHaveBeenCalledTimes(1);
  //   });
  //   it('complains when wrong `nativeType` is passed', () => {
  //     global.console = { warn: jest.fn(), error: jest.fn() };
  //     shallowMount(Button, {
  //       propsData: {
  //         nativeType: 'something',
  //       },
  //     });
  //     expect(console.warn).toHaveBeenCalledTimes(1);
  //     expect(console.error).toHaveBeenCalledTimes(1);
  //   });
  //   it('complains when `to` is not String or Object', () => {
  //     global.console = { warn: jest.fn(), error: jest.fn() };
  //     shallowMount(Button, {
  //       propsData: {
  //         to: 1,
  //       },
  //     });
  //     shallowMount(Button, {
  //       propsData: {
  //         to: () => 'test',
  //       },
  //     });
  //     expect(console.warn).toHaveBeenCalledTimes(2);
  //     expect(console.error).toHaveBeenCalledTimes(2);
  //   });
  // });

  describe('#computed', () => {
    it('evaluates to the right classes', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          badge: '<div />',
          icon: '<div />',
        },
        propsData: {
          type: 'default',
          size: 'medium',
          fake: true,
          text: true,
          icon: true,
          dense: true,
          disabled: true,
          block: true,
          attached: 'left',
        },
      });
      const baseClass = 'button';
      expect(wrapper.vm.classes).toEqual(expect.arrayContaining([
        `${baseClass}`,
        `${baseClass}--default`,
        `${baseClass}--medium`,
        `${baseClass}--has-badge`,
        `${baseClass}--has-icon`,
        `${baseClass}--fake`,
        `${baseClass}--text`,
        `${baseClass}--icon`,
        `${baseClass}--dense`,
        `${baseClass}--disabled`,
        `${baseClass}--block`,
        `${baseClass}--attached-left`,
      ]));
    });

    describe('evaluates to the right component', () => {
      it('returns a `nuxt-link` if `to` is passed and $nuxt is available', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            to: 'test-route',
          },
          stubs: {
            NuxtLink: true,
          },
        });
        expect(wrapper.vm.component).toEqual('nuxt-link');
      });
      it('returns a `router-link` if `to` is passed and $nuxt is not available', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: false,
            $router: true,
          },
          propsData: {
            to: 'test-route',
          },
          stubs: {
            RouterLink: true,
          },
        });
        expect(wrapper.vm.component).toEqual('router-link');
      });
      it('returns an `a` if `href` was passed', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            href: 'https://test.com',
          },
        });
        expect(wrapper.vm.component).toEqual('a');
      });
      it('returns a `span` if `fake` is true', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            fake: true,
          },
        });
        expect(wrapper.vm.component).toEqual('span');
      });
      it('defaults to a `button`', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
        });
        expect(wrapper.vm.component).toEqual('button');
      });
    });
  });
});
