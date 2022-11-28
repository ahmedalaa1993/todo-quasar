<template>
  <q-page class="q-pa-md">
    <q-scroll-area style="height: 85vh; max-width: 100%">
      <div class="row">
        <searchInput />
        <sort-list />
      </div>

      <q-list v-if="tasksStore.searchBox.length" separator bordered>
        <!-- tasks search component -->
        <serch-list />
      </q-list>
      <div v-if="tasksStore.searchInput.length">
        <p v-show="!tasksStore.searchBox.length">no results</p>
      </div>
      <div class="relative-position">
        <!-- banner to add new task if no tasks -->
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div
            v-if="
              !tasksStore.tasksUnCompleted.length &&
              !tasksStore.searchBox.length
            "
          >
            <q-banner class="bg-grey-3">
              <template v-slot:avatar>
                <q-icon name="check" color="primary" />
              </template>
              No tasks to do today !
              <template v-slot:action>
                <q-btn
                  @click="showAddTask = true"
                  color="primary"
                  label="Add Task"
                />
              </template>
            </q-banner>
          </div>
        </transition>

        <!-- tasks todo component -->
        <transition
          appear
          enter-active-class="animated zoomIn  absolute-top"
          leave-active-class="animated zoomOut  absolute-top"
        >
          <q-list
            v-if="
              tasksStore.tasksUnCompleted.length && !tasksStore.searchBox.length
            "
            separator
            bordered
          >
            <tasksTodo />
          </q-list>
        </transition>

        <!-- tasks  completed component -->
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <q-list
            class="q-mt-lg"
            v-if="
              tasksStore.tasksCompleted.length && !tasksStore.searchBox.length
            "
            separator
            bordered
          >
            <tasksComplete />
          </q-list>
        </transition>
      </div>
    </q-scroll-area>
    <div class="text-center absolute-bottom q-my-lg no-pointer-events">
      <q-btn
        class="all-pointer-events"
        round
        color="primary"
        size="22px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <dialogeModel @offDialog="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import dialogeModel from "src/components/dialogeModel.vue";

import tasksTodo from "../components/tasksTodo.vue";
import tasksComplete from "../components/tasksComplete.vue";
import searchInput from "../components/searchInput.vue";
import serchList from "../components/serchList.vue";
import sortList from "../components/sortList.vue";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();

const showAddTask = ref(false);

// console.log("arr", tasksStore.unCompleteTasks.length);
// console.log("tasksUnCompleted- com", tasksStore.tasksUnCompleted.length);
// console.log("---------------------");
// console.log(tasksStore.tasks.length);
// console.log("---------------------");
// console.log("arr", tasksStore.completeTasks.length);
// console.log("tasksCompleted- com ", tasksStore.tasksCompleted.length);

// const toggleComplete = (id) => {
//   tasks.value.find((i) => {
//     if (i.id == id) {
//       i.completed = !i.completed;
//       console.log(i, );
//     }
//   });

//   console.log(
//     tasks.value.find((i) => {
//       if (i.id == id) i.completed = !i.completed;
//       console.log(i);
//     })
//   );
// hwa lw 7atet func gwa console ezay btshta8el !!?
// };
</script>

<style lang="scss"></style>
