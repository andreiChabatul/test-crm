// vuex.d.ts
import { Store } from 'vuex'
import { MainTable } from './src/types/respBack';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    leads: MainTable[]
    loading: boolean
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}