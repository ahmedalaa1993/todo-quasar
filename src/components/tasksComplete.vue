<template>
  <list-header :bgColor="'bg-green-4'">Completed</list-header>
  <q-item
    v-for="task in tasksStore.tasksCompleted"
    :key="task.id"
    @click="task.completed = !task.completed"
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    v-ripple
  >
    <list-items :task="task" />
  </q-item>
</template>

<script setup>
import listHeader from "src/components/sharedDialog/listHeader.vue";
import ListItems from "../components/ListItems";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();
</script>

<style lang="scss" scoped></style>
