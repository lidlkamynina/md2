<template>
    <div class="sort-container">
      <button class="button" @click="applyFilter('None')" :class="{ active: activeFilter === 'None' }">None</button>
      <button class="button" @click="applyFilter('Name')" :class="{ active: activeFilter === 'Name' }">Name</button>
      <button class="button" @click="applyFilter('Artist')" :class="{ active: activeFilter === 'Artist' }">Artist</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'SongFilterComponent',
    props: {
      onFilterChanged: Function,
    },
    setup(props) {
      const activeFilter = ref('None');
  
      const applyFilter = (filter) => {
        activeFilter.value = filter;
        props.onFilterChanged(filter);
      };
  
      return {
        activeFilter,
        applyFilter,
      };
    },
  };
  </script>
  