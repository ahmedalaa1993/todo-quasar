<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="blue"
            v-model="tasksStore.show12Hours"
            @click="tasksStore.timeFormat"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();
import { ref } from "vue";
// const show12Hours = ref(null);
// show12Hours.value = tasksStore.show12Hours;

// function timeFormat() {
//   console.log(show12Hours.value);
//   if (show12Hours.value) {
//     tasksStore.show12HoursFormat;
//   }
// }
// function timeFormat() {
//   console.log(tasksStore.show12Hours);
//   if (tasksStore.show12Hours) {
//     // tasksStore.show12HoursFormat;
//   } else return false;
// }
</script>

<style lang="scss" scoped></style>
