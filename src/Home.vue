<template>
  <v-ons-page class="page">
    <ons-row id="picture">
      <ons-col class="circle" align="center">
        <img class="title" :src="imagePath">
      </ons-col>
    </ons-row>
    {{ name }}

    <ons-row align="center" class="data">
      <ons-col width="35%" class="data-col-left">
        <font style="font-size:4em" class="my-font">{{age}}</font>&nbsp;years old
      </ons-col>
      <ons-col width="35%" class="data-col-right">
        <font style="font-size:4em" class="my-font">{{weight}}</font>&nbsp;kg
      </ons-col>
    </ons-row>
    
    <hr style="width:80%" class="my-hr">

    <ons-row align="center" style="margin-top:5%">
      <ons-col width="35%" class="data-col-left">
        Daily Water
      </ons-col>
      <ons-col width="35%" class="data-col-right">
        <font class="my-font" style="font-weight:bold">{{water + ' / ' + totalWater}}</font>&nbsp;cc
      </ons-col>
    </ons-row>
    <div class="Percentage">
      <progress-bar :value="water / totalWater * 100" :colorIndex="1" ></progress-bar>
    </div>
    <ons-row align="center" class="water" style="margin-top:5%">
      <ons-col width="35%" class="data-col-left">
        Daily Food
      </ons-col>
      <ons-col width="35%" class="data-col-right">
        <font class="my-font" style="font-weight:bold">{{food + ' / ' + totalFood}}</font>&nbsp;kcal
      </ons-col>
    </ons-row>
    <div class="Percentage">
      <progress-bar :value="food / totalFood * 100" :colorIndex="0" ></progress-bar>
    </div>

    <hr style="width:80%; margin-top:5%" class="my-hr">

    <ons-row align="center" style="margin-top:5%">
      <ons-col width="35%" class="data-col-left">
        Remaining Water
      </ons-col>
      <ons-col width="35%" class="data-col-right">
        Last Refilled Water
      </ons-col>
    </ons-row>
    <ons-row align="center" style="margin-top:5%">
      <ons-col width="35%" class="col-left">
        <progress-circle :value="wRemain"></progress-circle>
      </ons-col>
      <ons-col width="35%" class="col-right">
        <font style="font-size:3em" class="my-font">{{lastDay}}</font>&nbsp;day&nbsp;
        <font style="font-size:3em" class="my-font">{{lastHr}}</font>&nbsp;hr
      </ons-col>
    </ons-row>
  </v-ons-page>
</template>

<script>
  import progressBar from 'ProgressBar';
  import progressCircle from 'ProgressCircle';

  export default {
    data() {
      return {
        imagePath: require('../www/assets/img/default.png'),
        name: 'latte',
        age: '3',
        weight: '4.0',
        water: 58,
        wRemain: 58,
        food: 191,
        lastDay: '1',
        lastHr: '3'
      }
    },
    computed: {
      totalFood() {
        return parseFloat(this.weight) * 65;
      },
      totalWater() {
        return parseFloat(this.weight) * 40;
      }
    },
    components: { progressBar, progressCircle }
  }
</script>

<style>
  #picture {
    text-align: center;
    height: 30%;
  }

  .page {
    text-align: center;
  }

  .data {
    height: 15%;
  }

  .data-col-left {
    margin-left: 15%;
    text-align: left;
  }

  .data-col-right {
    text-align: right;
  }

  .Percentage {
    width: 100%;
    height: 2%;
  }

  .col-left {
    margin-left: 10%;
    text-align: center;
  }

  .col-right {
    margin-left: 10%;
    text-align: center;
  }

  .my-font {
    font-family: 'Dekar Light' !important;
  }

  .my-hr {
    height: 1px;
    color: #A0A0A0;
    background-color: #A0A0A0;
    border: none;
  }
</style>