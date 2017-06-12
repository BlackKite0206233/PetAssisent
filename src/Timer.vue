<template>
  <v-ons-page>
    <ons-row id="picture">
      <ons-col class="circle" align="center">
        <img class="title" src="../www/assets/img/timer.png">
      </ons-col>
    </ons-row>

    <div id="timer-body" style="margin-top:-3%">
      <ons-row align="center" class="timer-row" v-for="item in items">
        <timer-list :timerId="item.id" :hr="item.hr" :min="item.min" :date="item.date" :isOn="item.isOn"></timer-list>
      </ons-row>
      <v-ons-button id="timer-add" @click="add" ripple></v-ons-button>
    </div>

    <add-timer :modalVisible="modalVisible" v-on:close="close"></add-timer>
  </v-ons-page>
</template>

<script>
  import timerList from 'TimerList';
  import addTimer from 'AddTimer';

  export default {
    data() {
      return {
        modalVisible: false,
        items: [
          {
            hr: { 
              value: 7
            },
            min: {
              value: 30
            },
            date: {
              value: [true, true, true, true, true, true, true]
            },
            isOn: {
              value: true
            }
          }
        ]
      }
    },
    methods: {
      add() {
        this.modalVisible = true;
        //this.update();
      },
      close() {
        this.modalVisible = false;
      },
      update() {
        // var timerRepository = require('./Repositories/TimerRepository');
        // var self = this;

        // timerRepository.getAll().then(function(result) {
        //   self.items = result;
        // }).catch(function(error) {
        //   self.$ons.notification.alert("webSQL didn't work");
        // });
      },
    },
    mounted: function() {
      //this.update();
    },
    components: { timerList, addTimer }
  }
</script>

<style>
  #picture {
    text-align: center;
    height: 30%;
  }

  #timer-body {
    height: 60%;
    width: 100%;
    text-align: center;
  }

  #timer-add {
    width: 10vw;
    height: 10vw;
    background-image: url('../www/assets/img/plus.png');
    background-position: top 50% left 50%;
    background-size: 70% 70%;
    background-repeat: no-repeat;
    background-color: rgba(255, 64, 0, 0.5);
    border-radius: 50%;
    margin-top: 2.5%;
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

  .timer-row {
    height: 35%;
    width: 85%;
    margin-left: 7.5%;
    margin-top: 2.5%;
    border-radius: 5%/2%;
  }
</style>
