<template>
  <div>
    <q-item
      v-for="task in tasksStore.searchField"
      :key="task.id"
      @click="task.completed = !task.completed"
      :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
      clickable
      v-ripple
    >
      <list-items :task="task" />
    </q-item>
  </div>
</template>

<script setup>
import ListItems from "../components/ListItems";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();
</script>

<style lang="scss" scoped></style>
