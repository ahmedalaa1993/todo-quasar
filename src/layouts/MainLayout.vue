<template>
  <q-layout view="hHh lpR fFf ">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title class="absolute-center"> To Do List </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary"
      :width="220"
      :breakpoint="767"
      show-if-above
      bordered
    >
      <q-list dark>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          class="text-grey-4"
          exact
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
// import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue"; // leh lonha kda ?

const linksList = [
  {
    title: "tasks",
    icon: " format_list_bulleted ",
    to: "/",
  },
  {
    title: "settings",
    icon: "settings",
    to: "/settingPage",
  },
];

// export default defineComponent({
//   name: "MainLayout",

// components: {
//   EssentialLink,
// },

// setup() {
//   // const leftDrawerOpen = ref(false);

//   return {
//     // EssentialLinks = linksList,
//     // leftDrawerOpen,
//     // toggleLeftDrawer() {
//     //   leftDrawerOpen.value = !leftDrawerOpen.value;
//     // },
//   };
// },
// });
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
  .q-drawer {
    .q-item.q-router-link--active {
      color: white !important;
    }
  }
}
</style>
