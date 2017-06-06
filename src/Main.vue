<template id="main">
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import start from 'Start';

  export default {
    data() {
      return {
        pageStack: [start]
      }
    }
  }
</script>