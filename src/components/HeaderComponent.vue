<template>
    <div>
        <header class="header" :style="{ backgroundColor: isLoggedIn ? '#aa7af1' : '#2535E8' }">
      <div class="header-logo">
        <img class="header-logoimg" src="../assets/logo.png" alt="Logo" />
        <h2>LABA.DABA</h2>
      </div>
      <div class="header-user">
        <div class="user-info" v-if="store.isLoggedIn">
          <div class="avatar"></div>
          <h3 class="username">{{ fullName }}</h3>
        </div>
        <div v-if="isLoggedIn"></div>
        <button class="button" @click="store.loginManager()">{{ store.isLoggedIn ? 'LOGOUT' : 'LOGIN' }}</button>
      </div>
    </header>
    </div>
  </template>
  
  <script>
  import { store } from '../store';
  
  export default {
    data() {
      return {
        store
      }
    },
    computed: {
      fullName() {
        return `${store.user.name} ${store.user.surname}`;
      },
      isLoggedIn() {
      return store.isLoggedIn;
    }
    }
  }
  </script>