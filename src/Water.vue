<template>
  <v-ons-page>
    <ons-row id="picture">
      <ons-col class="circle" align="center">
        <img class="title" src="../www/assets/img/water.png">
      </ons-col>
    </ons-row>

    <div id="water-body" style="margin-top:-6.4%">
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
          <font style="font-size:3em" class="my-font">{{lastWaterDay}}</font>&nbsp;day&nbsp;
          <font style="font-size:3em" class="my-font">{{lastWaterHr}}</font>&nbsp;hr
        </ons-col>
      </ons-row>

      <ons-row align="center" style="margin-top:5%">
        <ons-col width="35%" class="data-col-left">
          Collar Sensor
        </ons-col>
        <ons-col width="35%" class="data-col-right">
          Last Changed Filter
        </ons-col>
      </ons-row>
      <ons-row align="center" style="margin-top:5%">
        <ons-col width="35%" class="col-left">
          <v-ons-switch input-id="collar"
              v-ons-model="isCollarOn"></v-ons-switch>
        </ons-col>
        <ons-col width="35%" class="col-right">
          <font style="font-size:3em" class="my-font">{{lastChangeMth}}</font>&nbsp;mth&nbsp;
          <font style="font-size:3em" class="my-font">{{lastChangeDay}}</font>&nbsp;day
        </ons-col>
      </ons-row>
    </div>

    <hr style="width:80%; margin-bottom:5%" class="my-hr">
    Daily Water
    <ons-row align="center" style="margin-top:4%">
      <ons-col style="text-align:center">
        <font style="font-size:4em" class="my-font">{{water}}</font>&nbsp;
        <font style="font-size:1.5em">/</font>&nbsp;
        <font style="font-size:4em" class="my-font">{{totalWater}}</font>&nbsp;cc
      </ons-col>
    </ons-row>

    <date-bar></date-bar>
  </v-ons-page>
</template>

<script>
  import waterData from 'WaterData';
  import progressCircle from 'ProgressCircle';
  import dateBar from 'DateBar';

  export default {
    methods: {
      push() {
        this.pageStack.push(waterData);
      },
      update() {
        var accountRepository = require('./Repositories/AccountRepository');
        var self = this;
        
        accountRepository.getAccountById(1).then(function(result) {
          self.weight = result.petWeight;
        }).catch(function(error) {
          self.$ons.notification.alert("webSQL didn't work");
        });
      }
    },
    props: ['pageStack'],
    data() {
      return {
        weight: '',
        water: 58,
        wRemain: 58,
        lastWaterDay: '1',
        lastWaterHr: '3',
        lastChangeMth: 2,
        lastChangeDay: 7,
        isCollarOn: false
      }
    },
    computed: {
      totalWater() {
        return parseFloat(this.weight) * 40;
      }
    },
    updated: function() {
      this.update();
    },
    mounted: function() {
      this.update();
    },
    components: { progressCircle, dateBar }
  };
</script>

<style>
  #picture {
    text-align: center;
    height: 30%;
  }

  .circle {
    width: 100%;
    height: 100%;
    background: rgba(200, 200, 200, 0.3);
    clip-path: circle(20% at 50% 50%);
  }

  .title {
    max-width: 20%;
    height: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  #water-body {
    height: 42%;
    width: 100%;
  }
</style>