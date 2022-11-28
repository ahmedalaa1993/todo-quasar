<template>
  <div class="col-6">
    <q-input
      outlined
      @keyup="tasksStore.search"
      @keyup.esc="tasksStore.searchInput = ''"
      bottom-slots
      v-model="tasksStore.searchInput"
      label="Search"
      dense="dense"
    >
      <template v-slot:append>
        <q-icon
          v-if="tasksStore.searchInput !== ''"
          name="close"
          @click="tasksStore.searchInput = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>
    <!-- <pre>{{ tasksStore.searchInput }} </pre>
    <pre>{{ tasksStore.searchBox }} </pre> -->
  </div>
</template>

<script setup>
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();
// tasksStore.searchHehigLighter;
</script>

<style lang="scss" scoped></style>
