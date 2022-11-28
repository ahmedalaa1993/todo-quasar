<template>
  <div>
    <q-banner
      dense
      inline-actions
      :class="bgColor"
      class="text-white text-center"
    >
      <span class="listHeading text-bold text-subtitle1"><slot></slot></span>
    </q-banner>
  </div>
</template>

<script setup>
const props = defineProps(["bgColor"]);
</script>

<style lang="scss">
.listHeading {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
