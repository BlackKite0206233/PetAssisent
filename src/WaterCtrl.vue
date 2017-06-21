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
        var self = this;

        var list;
        var bluetoothSerial=require('cordova-plugin-bluetooth-serial/www/bluetoothSerial');
        /*
        bluetoothSerial.list(function(success) {
          list = success;
          self.$ons.notification.toast("list", {timeout: 2000}); 
        }, function(error) {
          self.$ons.notification.alert(error);  
        });*/

        //.self.$ons.notification.toast(list, {timeout: 2000}); 

        if(this.isOn) {
          bluetoothSerial.connect("98:D3:32:10:8D：A7", function(success) {
            self.$ons.notification.toast("connect", {timeout: 2000}); 
            bluetoothSerial.write("o", function(success) {
              self.imagePath = require('../www/assets/img/tapoff.png');
              self.$ons.notification.toast("o", {timeout: 2000}); 
            }, function(error) {
              self.$ons.notification.alert(error);  
            });
          }, function(error) {
            self.$ons.notification.alert(error);
          });
          
        } else{
          bluetoothSerial.connect("98:D3:32:10:8D：A7", function(success) {
            self.$ons.notification.toast("connect", {timeout: 2000}); 
            bluetoothSerial.write("c", function(success) {
              self.imagePath = require('../www/assets/img/waterCtrl.png');
              self.$ons.notification.toast("c", {timeout: 2000}); 
            }, function(error) {
              self.$ons.notification.alert(error);  
            });
          }, function(error) {
            self.$ons.notification.alert(error);
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