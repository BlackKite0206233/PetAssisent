<template>
  <v-ons-page style="text-align:center">
    <div id="title">
      <p>Health Control</p>
    </div>
    <div id="top">
      <v-ons-button ripple style="margin: 6px 0" @click="checkWater">checkWater</v-ons-button>
      <v-ons-button ripple style="margin: 6px 0" @click="checkFood">checkFood</v-ons-button>
    </div>
    <div id="bottom">
      <v-ons-button ripple style="margin: 6px 0" @click="waterControl">waterControl</v-ons-button>
      <v-ons-button ripple style="margin: 6px 0" @click="setClock">setClock</v-ons-button>  
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
