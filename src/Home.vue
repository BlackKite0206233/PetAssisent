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
      <progress-bar :value="waterPercent" :colorIndex="1" ></progress-bar>
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
      <progress-bar :value="foodPercent" :colorIndex="0" ></progress-bar>
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
        imagePath: '',
        name: '',
        age: '',
        weight: '',
        water: 0,
        wRemain: 0,
        food: 191,
        lastDay: '1',
        lastHr: '3',
        base: 100,
        lastW: 0
      }
    },
    computed: {
      totalFood() {
        return parseFloat(this.weight) * 65;
      },
      totalWater() {
        return parseFloat(this.weight) * 40;
      },
      foodPercent() {
        return Math.round(this.food / this.totalFood * 100);
      },
      waterPercent() {
        return Math.round(this.water / this.totalWater * 100);
      }
    },
    methods: {
      getData() {
        var accountRepository = require('./Repositories/AccountRepository');
        var self = this;

        accountRepository.getAccountById(1).then(function(result) {
          self.imagePath = result.imagePath;
          self.name = result.petName;

          var date = new Date();
          var birth = new Date(result.petBirth);
          
          self.age = Math.floor(((date.getFullYear() - birth.getFullYear()) * 10000 + 
                      (date.getMonth() - birth.getMonth()) * 100 +
                      (date.getDate() - birth.getDate())) / 10000);
          self.weight = result.petWeight;   
        }).catch(function(error) {
          console.log(error);
          self.$ons.notification.alert("error");  
        });
      },
      getWater() {
        bluetoothSerial.read(function(data) {
          self.wRemain = parseInt(data);
          if(self.water == 0) {
            self.lastW = self.wRemain; 
          } else {
            self.water += (self.lastW - self.wRemain) / 100 * self.base;
            self.lastW = self.wRemain; 
          }
        }, function(error) {
          self.water = self.wRemain = 0;
          self.$ons.notification.alert("error"); 
        });
      }
    },
    updated: function() {
      this.getData();
    },
    mounted: function() {
      this.getData();

      var self = this;
      bluetoothSerial.connect("", function(success) {
        setInterval(function() {
          self.getWater();
        }, 5000);
      }, function(error) {
        self.water = self.wRemain = 0;
        self.$ons.notification.alert("error"); 
      });
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