<template>
  <ons-row class="date-picker">
    <div class="lines"><div>:</div></div>
    <ons-col width="50%">
      <select class="date" id="hours" name="hours">
        <option v-for="hr in 24" :value="hr - 1">{{padding(hr - 1)}}</option>
      </select>
    </ons-col>
    <ons-col>
      <select class="date" id="minutes" name="minutes">
        <option v-for="min in 60" :value="min - 1">{{padding(min - 1)}}</option>
      </select>
    </ons-col>
  </ons-row>
</template>

<script>
  require('hammerjs');
  //require('../www/lib/hammer.fakemultitouch.js');
  require('../www/lib/drum.js');

  export default {
    props: ['choseHr', 'choseMin'],
    methods: {
      padding(time) {
        return (time < 10 ? '0' : '') + time;
      },
      update(_hr, _min) {
        $("#hours").drum('setIndex', _hr); 
			  $("#minutes").drum('setIndex', _min); 	
      }
    },
    watch: {
      choseHr: function() {
        var self = this;
        $("#hours").drum('setIndex', self.choseHr.value); 
      },
      choseMin: function() {
        var self = this;
        $("#minutes").drum('setIndex', self.choseMin.value); 	
      }
    },
    mounted: function() {
      var self = this;
      
      $("select.date").drum({
				onChange : function (elem) {
					var hr = parseInt($("select[name='hours']")[0].value);
          var min = parseInt($("select[name='minutes']")[0].value);
          self.update(hr, min);
				}
			});
      setTimeout(function() {
        self.update(self.choseHr.value, self.choseMin.value);
      }, 0);
    }
  }
</script>

<style>
  @import url('../www/lib/drum.css'); 

  .date-picker {
    font-family: Arial,Verdana,sans-serif;
    width: 100%;
    height: 100%;
  }

  .date-picker .lines {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;  
    border-top: solid 1px #CCC;
    border-bottom: solid 1px #CCC;
    position: absolute;
    top: 13%;
    left: 10%;
    width: 80%;
    height: 4%;
  }

  div.drum-wrapper {
    float: left;
    height: 100%;
  }

  div.drum figure {
    text-align: center;
  }

  #drum_hours figure {
    text-align: center;
  }

  #drum_hours, 
  #drum_minutes {
    width: 100%;
  }

  div.drum-wrapper .dial {
    position: absolute;
    width: 100%;
    left: 0px;
    height: 48px;
    background-color: transparent;
    display: none;
  }

  div.dial.down {
    top: 0%;
    margin-left: -7%;
    margin-top: 70%;
  }

  div.dial.up {
    margin-top: -7%;
    margin-left: -7%;
  }
</style>
