import store from '@/store/index';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: store;
  }
}
