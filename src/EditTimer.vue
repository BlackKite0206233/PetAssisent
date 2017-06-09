<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="timer-form">
      <v-ons-toolbar>
        <div class="center">
          edit timer
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="$emit('close')">cancel</v-ons-button>
        </div>
      </v-ons-toolbar>
      
      <div class="date-picker">
        <date-picker :choseHr="hr" :choseMin="min"></date-picker>
      </div>

      <div class="day-list">
        <day-list :items="day"></day-list>
      </div>

      <ons-row align="center">
        <ons-col style="text-align: center">
          <v-ons-button id="add-timer-btn" ripple @click="addTimer">Done</v-ons-button>
        </ons-col>
      </ons-row>
        
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
  import datePicker from 'DatePicker';
  import dayList from 'DayList';

  export default {
    props: ['modalVisible', 'hr', 'min', 'date'],
    data() {
        return {
          day: {
            name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            value: [false, false, false, false, false, false, false]
          }
        }
    },
    computed: {
    },
    methods: {
      addTimer() {
        this.$emit('close');
      }
    },
    components: { datePicker, dayList }
  }
</script>

<style>
  #add-timer-btn {
    width: 80%;
    background-color: rgba(255, 64, 0, 0.3);
    color: black;
    font-family: Skia;
    font-weight: lighter;
  }
  
  .close {
    background-color: transparent;
    margin-right: 10%;
    color: rgb(128, 128, 255);
    font-family: Skia;
    font-weight: lighter;
  }

  .timer-form {
    width: 90%;
    height: 80%;
    border-radius: 2%;
    position: relative;
    top: 40%;
    left: 5%;
  }

  .date-picker {
    margin-top: 5%;
    height: 25%;
    width: 80%;
    margin-left: 10%;
  }

  .day-list {
    height: 55%;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 3%; 
    margin-top: 5%;
  }

</style>

