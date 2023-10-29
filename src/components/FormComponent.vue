<template>
  <div class="form-container">
    <form>
      <div class="form-row">
        <label for="firstName" class="form-label">First name</label>
        <input type="text" id="firstName" v-model="user.name" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label for="lastName"  class="form-label">Last name</label>
        <input type="text" id="lastName" v-model="user.surname" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label for="studentCode" class="form-label">Student code</label>
        <input type="text" id="studentCode" v-model="user.code" :disabled="disabled" />
      </div>
      <div class="form-row">
        <label for="loggedAt">Logged in at</label>
        <ul>
          <li>{{lastLogin}}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import {store} from '../store';

export default {
  computed: {
    lastLogin() {
      return store.user.time;
    }
  },
  props: {
    disabled: Boolean,
  },
  setup() {
    const user = ref(store.user);

    return {
      user,
    };
  },
};
</script>