<template>
  <div class="comp-container">
    <div class="about-me-header">
      <h1>ABOUT ME</h1>
      <div class="about-me-devider"></div>
      <button class="button" @click="isEditing">{{ editLabel }}</button>
    </div>
    <FormComponent :disabled="isFormDisabled" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'AboutMeComponent',
  setup() {
    const isFormEditing = ref(false);

    const isEditing = () => {
      isFormEditing.value = !isFormEditing.value;
    };

    const editLabel = computed(() => {
      return isFormEditing.value ? 'CANCEL' : 'EDIT FORM';
    });

    const isFormDisabled = computed(() => {
      return !isFormEditing.value;
    });

    return {
      isFormEditing,
      isEditing,
      editLabel,
      isFormDisabled,
    };
  },
};
</script>
