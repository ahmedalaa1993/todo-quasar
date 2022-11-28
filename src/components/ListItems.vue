<template>
  <q-item-section side top>
    <!--  eslint-disable-next-line vue/no-mutating-props -->
    <q-checkbox v-model="task.completed" />
  </q-item-section>

  <q-item-section>
    <q-item-label :class="{ 'text-done': task.completed }"
      >{{ task.name }}
    </q-item-label>
  </q-item-section>

  <q-item-section v-if="task.dueDate" side top>
    <div class="row">
      <div class="column justify-center">
        <q-icon name="event" size="20px" class="text-primary q-mr-xs" />
      </div>

      <div class="column">
        <q-item-label class="row justify-end text-primary" caption
          >{{ task.dueDate }}
        </q-item-label>
        <q-item-label class="row justify-end text-primary" caption>
          <small v-if="!tasksStore.show12Hours">{{ task.dueTime }} </small>
          <small v-if="tasksStore.show12Hours">{{ task.time12 }} </small>
        </q-item-label>
      </div>
    </div>
  </q-item-section>

  <q-item-section side>
    <div class="row">
      <q-btn
        flat
        round
        dense
        color="primary"
        icon="edit"
        @click.stop="tasksStore.editItem(task.id)"
      />
      <q-btn
        flat
        round
        dense
        color="primary"
        icon="delete"
        @click.stop="tasksStore.deleteItem(task.id)"
      />
    </div>
    <!-- lma 3mlt el delete => task.id mb2ash bymsa7 el completed task !!! 
          bs esha8al fel3ady m3 el ba2y !! -->
  </q-item-section>
</template>

<script setup>
import { date } from "quasar";
import { computed } from "vue";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();
const props = defineProps(["task"]);
tasksStore.niceDate;
tasksStore.show12HoursFormat;
</script>

<style lang="scss" scoped>
.text-done {
  text-decoration: line-through;
}
</style>
