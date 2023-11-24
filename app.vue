<template>
  <VitePwaManifest />
  <nav>
    <NavbarComponent />
  </nav>
  <NuxtPage />
</template>
<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession()
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");
  
  @font-face {
    font-family: "Actay";
    src: local("Actay"), url(public/fonts/ActayWide-Bold.otf) format("opentype");
    }

    .font-header {
    font-family: "Actay";
    }
</style>