<template id="main">
  <v-ons-page>
    <v-ons-navigator :page-stack="pageStack">
      <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
    </v-ons-navigator>
  </v-ons-page>
</template>

<script>
  import food from 'Food';
  import foodData from 'FoodData';

  export default {
    data() {
      return {
        pageStack: [food]
      }
    }
  }
</script>