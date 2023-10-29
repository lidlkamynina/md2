<template>
  <div class="song-list">
      <div>
          <SongFilterComponent @filterChanged="applyFilter" />
          <table class="song-list-table">
              <div class="song-list-table-column">
                  <div class="song-list-header">
                      <div>Name</div>
                  </div>
                  <tbody class="song-list-row">
                      <tr v-for="song in filteredSongs" :key="song.name">
                          <td>{{ song.song }}</td>
                      </tr>
                  </tbody>
              </div>
              <div class="song-list-table-column">
                  <div class="song-list-header">
                      <div>Artist</div>
                  </div>
                  <tbody class="song-list-row">
                      <tr v-for="song in filteredSongs" :key="song.name">
                          <td>{{ song.artist }}</td>
                      </tr>
                  </tbody>
              </div>
          </table>
      </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import {store} from '../store.js'; 

export default {
  setup() {
    const songs = ref(store.all_songs);
    const activeFilter = ref('None');
    let originalSongs = [...songs.value]; 

    onMounted(() => {
      originalSongs = [...songs.value];
    });

    const sortName = () => {
      songs.value.sort((a, b) => a.song.localeCompare(b.song));
      applyFilter(activeFilter.value);
    };

    const sortArtist = () => {
      songs.value.sort((a, b) => a.artist.localeCompare(b.artist));
      applyFilter(activeFilter.value); 
    };

    const applyFilter = (filter) => {
      activeFilter.value = filter;

      if (filter === 'Name') {
        songs.value.sort((a, b) => a.song.localeCompare(b.song));
      } else if (filter === 'Artist') {
        songs.value.sort((a, b) => a.artist.localeCompare(b.artist));
      } else if (filter === 'None') {
        songs.value = [...originalSongs];
      }
    };

    const filteredSongs = computed(() => {
      if (activeFilter.value === 'Name') {
        return [...songs.value].sort((a, b) => a.song.localeCompare(b.song));
      } else if (activeFilter.value === 'Artist') {
        return [...songs.value].sort((a, b) => a.artist.localeCompare(b.artist));
      } else {
        return [...songs.value];
      }
    });

    return {
      activeFilter,
      sortName,
      sortArtist,
      applyFilter,
      filteredSongs,
    };
  },
};
</script>