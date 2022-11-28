<template>
  <q-card>
    <dialogHeader>Add Task </dialogHeader>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            class="col"
            outlined
            clearable
            label="Task Name"
            v-model="taskName"
            autofocus
            ref="inputRef"
            :rules="[(val) => !!val || 'Field is required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskName"
                @click="taskName = ''"
                name="close"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input label="Due Date" outlined v-model="date" clearable>
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="date" class="row q-mb-sm">
          <q-input label="Due Time" outlined v-model="time" clearable>
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
    <!-- <pre>{{ taskName }} </pre> -->
  </q-card>
</template>

<script setup>
import dialogHeader from "./sharedDialog/dialogeHeader.vue";
import dialogName from "./sharedDialog/dialogeName.vue";
import { uid } from "quasar";
import { ref } from "vue";
import { useTasksStore } from "../stores/example-store";
const tasksStore = useTasksStore();

const inputRef = ref(null);

const taskName = ref("..");
const date = ref("");
const time = ref("");

const emit = defineEmits(["offDialog"]);

const submitForm = () => {
  console.log("done");
  inputRef.value.validate();
  if (!inputRef.value.hasError) {
    console.log("yes");
    let uniId = uid();
    //  newTask ..
    tasksStore.addTask({
      id: uniId,
      name: taskName.value,
      completed: false,
      dueDate: date.value,
      dueTime: time.value,
    });
    submitTask();
  }
};
const submitTask = () => {
  console.log("hello from here");
  emit("offDialog");
};
</script>

<style lang="scss" scoped></style>
