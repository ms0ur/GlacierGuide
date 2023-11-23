<script setup lang="ts">
const route = useRoute()
const { loggedIn, user, session, clear } = useUserSession()




</script>

<template>
  <div class="mx-32 mt-5 mb-9" v-if="loggedIn">
    <MainAuthorizedComponent />
    <LandingMiddleComponent class="mt-5" />
  </div>
  <div class="mx-32 mt-8" v-else>
    <LandingMainComponent class="pb-48"/>
    <LandingMiddleComponent />
    <LoginComponent />
  </div>
</template>
