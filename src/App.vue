<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <LandingComponent v-if="!store.isLoggedIn"></LandingComponent>
      <NavigationComponent v-if="store.isLoggedIn"></NavigationComponent>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LandingComponent from './components/LandingComponent.vue';
import { store } from './store';


export default {
  data() {
    return {
      store
    };
  },
  components: { LandingComponent}
}
</script>
