<template>
  <div class="comp-container">
      <h1>HOME</h1>
      <SongListComponent/>
  </div>
</template>

<script>
import SongListComponent from './SongListComponent.vue';

export default {
    components: {
        SongListComponent,
    },
};
</script>
