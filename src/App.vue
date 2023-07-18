<template>
    <div class="w-screen h-screen">
      
      <router-view />
      <!-- 播放器 -->
      <Player />
      <!-- 菜单 -->
    </div>
  </template>
  <script>
    import Player from "@/components/Player/Player.vue";
    // Vue.use(Player)
    export default {
      components: { Player },
    }
  </script>
  <style>

  </style>