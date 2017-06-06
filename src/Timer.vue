<template>
  <v-ons-page>
    <ons-row id="picture">
      <ons-col class="circle" align="center">
        <img class="title" src="../www/assets/img/timer.png">
      </ons-col>
    </ons-row>

    <div id="timer-body" style="margin-top:-3%">
      <ons-row align="center" class="timer-row" v-for="item in items">
        <timer-list :time="item.time" :date="item.date" :isOn="item.isOn"></timer-list>
      </ons-row>
      <v-ons-button id="timer-add" @click="add" ripple></v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
  import timerList from 'TimerList';

  export default {
    data() {
      return {
        items: [
          {
            time: '07:30',
            date: [0, 1, 2, 3, 4, 5, 6],
            isOn: false
          },
          {
            time: '10:30',
            date: [0, 6],
            isOn: false
          }
        ]
      }
    },
    methods: {
      add() {

      }
    },
    components: { timerList }
  }
</script>

<style>
  #picture {
    text-align: center;
    height: 30%;
  }

  #timer-body {
    height: 80%;
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
    height: 25%;
    width: 85%;
    margin-left: 7.5%;
    margin-top: 2.5%;
    border-radius: 5%/2%;
  }
</style>
