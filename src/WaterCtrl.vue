<template>
  <v-ons-page>
    <ons-row class="picture">
      <v-ons-button class="circleBtn" @click="click" ripple>
        <img class="title" :src="imagePath">
      </v-ons-button>
      <p class="text">TAP IT!</p>
    </ons-row>
  </v-ons-page>
</template>

<script>
  export default {
    data() {
      return {
        isOn: false,
        imagePath: require('../www/assets/img/waterCtrl.png')
      }
    },
    methods: {
      click() {
        this.isOn = !this.isOn;

        if(this.isOn) {
          bluetoothSerial.write("o", function(success) {
            this.imagePath = require('../www/assets/img/tapoff.png');
            self.$ons.notification.alert("o");  
          }, function(error) {
            self.$ons.notification.alert("error");  
          });
        } else{
          bluetoothSerial.write("c", function(success) {
            this.imagePath = require('../www/assets/img/waterCtrl.png');
            self.$ons.notification.alert("c");  
          }, function(error) {
            self.$ons.notification.alert("error");  
          });
        }
      }
    }
  }
</script>

<style>
  .picture {
    text-align: center;
    height: 100%;
  }

  .circleBtn {
    width: 100%;
    height: 60%;
    background: rgba(200, 200, 200, 0.3);
    clip-path: circle(25% at 50% 50%);
    margin-top: 10%;
  }

  .bottom {
    top: -40%;
    position: relative;
    transform: translateY(40%);
  }

  .text {
    width: 100%;
    text-align: center;
    position: relative;
    top: -20%;
    font-size: 1.5em;
  }
</style>