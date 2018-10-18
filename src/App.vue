<template>
  <div id="app">
    <v-header></v-header>
    <v-banner></v-banner>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import banner from '@/components/banner'
import footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-banner': banner,
    'v-footer': footer
  }
}
</script>
