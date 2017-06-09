<template>
  <ons-row align="center" class="timer-list-row">
    <ons-col width="80%" style="margin-left:2%;margin-top:5%;height:95%">
      <ons-row align="center" class="time-date">
        <ons-col width="20%" style="height:100%">
          Time
        </ons-col>
        <ons-col style="height:100%;text-align:right">
          {{getHr + ':' + getMin}}
        </ons-col>
      </ons-row>

      <hr class="timer-hr">

      <ons-row align="center" class="time-date">
        <ons-col width="20%" style="height:100%">
          Day
        </ons-col>
        <ons-col style="height:100%;text-align:right">
          {{getDate}}
        </ons-col>
      </ons-row>

      <hr class="timer-hr">

      <ons-row align="center" class="timer-switch">
        <ons-col width="80%" style="height:100%"></ons-col>
        <ons-col style="height:100%">
          <v-ons-switch input-id="collar"
              v-ons-model="isOn.value" class="my-collar"></v-ons-switch>
        </ons-col>
      </ons-row>
    </ons-col>

    <ons-col style="height:100%">
      <v-ons-button class="timer-list-btn" ripple @click="edit"></v-ons-button>
    </ons-col>

    <edit-timer :modalVisible="modalVisible" :hr="hr" :min="min" :date="date" v-on:close="close"></edit-timer>
  </ons-row>
</template>

<script>
  import editTimer from 'EditTimer';

  export default {
    props: ['hr', 'min', 'date', 'isOn'],
    data() {
      return {
        modalVisible: false,
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    computed: {
      getHr() {
        return (this.hr.value < 10 ? '0' : '') + this.hr.value;
      },
      getMin() {
        return (this.min.value < 10 ? '0' : '') + this.min.value;
      },
      getDate() {
        var str = "";

        if(this.date.value.length == 7)
          return 'Every Day';

        for(var i = 0; i < this.date.value.length; i++)
          str += this.day[this.date.value[i]] + ', ';

        return str.substring(0, str.length - 2);
      }
    },
    methods: {
      edit() {
        this.modalVisible = true;
      },
      close() {
        this.modalVisible = false;
      }
    },
    components: { editTimer }
  }
</script>

<style>
  .timer-list-row {
    width: 100%;
    height: 100%;
    border-radius: 5%/15%;
    background-color: rgba(192, 192, 192, 0.3);
  }

  .timer-list-btn {
    left: 10%;
    height: 100%;
    width: 80%;
    background-color: transparent;
    background-image: url('../www/assets/img/next.png');
    background-size: 30% 20%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .time-date {
    width: 100%;
    height: 15%;
  }

  .timer-switch {
    width: 100%;
    height: 50%;
  }

  .timer-hr {
    height: 1px;
    color: #FFF;
    background-color: #FFF;
    border: none;
  }

  .my-collar input:checked + .switch__toggle {
    -webkit-box-shadow: inset 0 0 0 2px rgba(255, 64, 0, 0.3);
    box-shadow: inset 0 0 0 2px rgba(255, 64, 0, 0.3);
    background-color: rgba(255, 64, 0, 0.3);
  }
</style>
