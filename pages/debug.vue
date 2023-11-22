<script setup lang="ts">
const route = useRoute()
const { loggedIn, user, session, clear } = useUserSession()

const device = useDevice()
const dayjs = useDayjs();
dayjs.locale('ru');

const colorMode = useColorMode()


</script>

<template>
  <div>
    <div>
      <p>userAgent: {{ device.userAgent }}</p>
      <p>isDesktop: {{ device.isDesktop ? '✅':'❌' }}</p>
      <p>isIos: {{ device.isIos ? '✅':'❌' }}</p>
      <p>isMobile: {{ device.isMobile ? '✅':'❌' }}</p>
      <p>isMobileOrTablet: {{ device.isMobileOrTablet ? '✅':'❌' }}</p>
      <p>isDesktopOrTablet: {{ device.isDesktopOrTablet ? '✅':'❌' }}</p>
      <p>isTablet: {{ device.isTablet ? '✅':'❌' }}</p>
      <p>isWindows: {{ device.isWindows ? '✅':'❌' }}</p>
      <p>isMacOS: {{ device.isMacOS ? '✅':'❌' }}</p>
      <p>isApple: {{ device.isApple ? '✅':'❌' }}</p>
      <p>isAndroid: {{ device.isAndroid ? '✅':'❌' }}</p>
      <p>isSafari: {{ device.isSafari ? '✅':'❌' }}</p>
      <p>isFirefox: {{ device.isFirefox ? '✅':'❌' }}</p>
      <p>isEdge: {{ device.isEdge ? '✅':'❌' }}</p>
      <p>isChrome: {{ device.isChrome ? '✅':'❌' }}</p>
      <p>isSamsung: {{ device.isSamsung ? '✅':'❌' }}</p>
      <p>isCrawler: {{ device.isCrawler ? '✅':'❌' }}</p>
    </div>
    <div class="flex flex-col">
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      <button @click="colorMode.preference = 'light'">Light</button>
      <button @click="colorMode.preference = 'dark'">Dark</button>
      <button @click="colorMode.preference = 'system'">System</button>
    </div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <div v-if="loggedIn">    <h1>Welcome {{ user.email }}!</h1>    <p>Session: {{ session }}</p>    <button @click="clear">Logout</button>  </div>  <div v-else>    <h1>Not logged in</h1>    <a href="/login">Login</a>  </div>
  </div>
</template>
