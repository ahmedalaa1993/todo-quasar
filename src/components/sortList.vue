<template>
  <div class="col-2 q-ml-md">
    <q-select
      dense
      outlined
      emit-value
      map-options
      @click="tasksStore.sorted"
      v-model="tasksStore.sort"
      :options="options"
      label="Sorted By"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();

const options = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Date",
    value: "dueDate",
  },
];
// function sorted() {
//   tasksStore.sorted;
//   console.log(options.length);
//   console.log(options.value);
//   console.log(sortBy.value);
// }
// tasksStore.sorted;
</script>

<style lang="scss" scoped></style>
