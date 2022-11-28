<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="row q-mb-sm">
    <q-input
      class="col"
      outlined
      label="Task Name"
      :value="nameProp"
      @input="$emit('update:nameProp', $event)"
      autofocus
      ref="inputRef"
      :rules="[(val) => !!val || 'Field is required']"
    >
      <template v-slot:append>
        <q-icon
          v-if="nameProp"
          @click="nameProp = ''"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script setup>
const props = defineProps(["nameProp"]);
</script>

<style lang="scss" scoped></style>
