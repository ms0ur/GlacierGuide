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
