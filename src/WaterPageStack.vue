<template id="main">
  <v-ons-page>
    <v-ons-navigator :page-stack="pageStack">
      <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
    </v-ons-navigator>
  </v-ons-page>
</template>

<script>
  import water from 'Water';
  import waterData from 'WaterData';

  export default {
    data() {
      return {
        pageStack: [water]
      }
    }
  }
</script>