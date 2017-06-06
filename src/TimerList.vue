<template>
  <ons-row align="center" class="timer-list-row">
    <ons-col width="80%" style="margin-left:2%;margin-top:5%;height:95%">
      <ons-row align="center" class="time-date">
        <ons-col width="20%" style="height:100%">
          Time
        </ons-col>
        <ons-col style="height:100%;text-align:right">
          {{time}}
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
              v-ons-model="isOn" class="my-collar"></v-ons-switch>
        </ons-col>
      </ons-row>
    </ons-col>

    <ons-col style="height:100%">
    </ons-col>
  </ons-row>
</template>

<script>
export default {
  props: ['time', 'date', 'isOn'],
  data() {
    return {
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },
  computed: {
    getDate() {
      var str = "";
      for(var i = 0; i < this.date.length; i++)
        str += this.day[this.date[i]] + '/';

      return str.substring(0, str.length - 1);
    }
  }
}
</script>

<style>
  .timer-list-row {
    width: 100%;
    height: 100%;
    border-radius: 5%/15%;
    background-color: rgba(192, 192, 192, 0.3);
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
