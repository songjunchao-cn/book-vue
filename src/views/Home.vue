<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/common/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
