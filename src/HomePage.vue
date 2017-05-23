<template>
  <v-ons-page>
    <div id="title">
      <p>Health Control</p>
    </div>
    <div id="top">
    </div>
    <div id="bottom">
    </div>
  </v-ons-page>
</template>

<script>
  import checkWaterPage   from 'CheckWaterPage';
  import checkFoodPage    from 'CheckFoodPage';
  import waterControlPage from 'WaterControlPage';
  import setClockPage     from 'SetClockPage';

  export default {
     methods: {
       checkWater() {
         this.pageStack.push(checkWaterPage);
       },
       checkFood() {
         this.pageStack.push(checkFoodPage);
       },
       waterControl() {
         this.pageStack.push(waterControlPage);
       },
       setClock() {
         this.pageStack.push(setClockPage);
       }
     },
     props: ['pageStack'],
  }
</script>
