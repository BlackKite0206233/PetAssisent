<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import startPage        from 'StartPage';
  import homePage         from 'HomePage';
  import checkWaterPage   from 'CheckWaterPage';
  import checkFoodPage    from 'CheckFoodPage';
  import waterControlPage from 'WaterControlPage';
  import setClockPage     from 'SetClockPage';

  export default {
    data() {
      return {
        pageStack: [startPage]
      }
    }
  }
</script>
