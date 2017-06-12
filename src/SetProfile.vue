<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="form">
      <v-ons-toolbar>
        <div class="center">
          set profile
        </div>
      </v-ons-toolbar>
      <ons-row id="picture">
        <ons-col class="circle" align="center">
          <img class="title" :src="imagePath">
        </ons-col>
        <v-ons-button id="changePic" ripple @click="changePic">
          <img class="pic" src="../www/assets/img/camera.png">
        </v-ons-button>
      </ons-row>
      <ons-row align="center" class="form-row">
        <ons-col width="30%" class="label">
          {{items[0].message}}
        </ons-col>
        <ons-col width="60%">
          <input class="text-input--underbar" float 
            :placeholder="items[0].holder" 
            v-model="items[0].value"  
            type="text"></input>
        </ons-col>
      </ons-row>
      <ons-row align="center" class="form-row">
        <ons-col width="30%" class="label">
          {{items[1].message}}
        </ons-col>
        <ons-col width="60%">
          <input class="text-input--underbar" float 
            :placeholder="items[1].holder" 
            v-model="items[1].value"  
            type="text"></input>
        </ons-col>
      </ons-row>
      <ons-row align="center" class="form-row">
        <ons-col width="30%" class="label">
          {{items[2].message}}
        </ons-col>
        <ons-col width="60%">
          <input class="text-input--underbar" float 
            :placeholder="items[2].holder" 
            v-model="items[2].value"  
            type="text"></input>
        </ons-col>
      </ons-row>
      <ons-row align="center" class="form-row">
        <ons-col width="30%" class="label">
          {{items[3].message}}
        </ons-col>
        <ons-col width="60%">
          <input class="text-input--underbar" float 
            :placeholder="items[3].holder" 
            v-model="items[3].value"  
            type="date"></input>
        </ons-col>
      </ons-row>
      <ons-row align="center" class="form-row">
        <ons-col width="30%" class="label">
          {{items[4].message}}
        </ons-col>
        <ons-col width="60%">
          <input class="text-input--underbar" float 
            :placeholder="items[4].holder" 
            v-model="items[4].value"  
            type="text"></input>
        </ons-col>
      </ons-row>
      
      </ons-row>
      <div></div>
      <ons-row id="bottom" align="center">
        <ons-col style="text-align: center">
          <v-ons-button id="button" ripple @click="submit">Done</v-ons-button>
        </ons-col>
      </ons-row>
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
export default {
  props: ['modalVisible'],
  data() {
    return {
      imagePath: require('../www/assets/img/default.png'),
      items: [
        {
          message: 'Your Name',
          holder: 'your name',
          value: ''
        },
        {
          message: 'Your Email',
          holder: 'your email',
          value: ''
        },
        {
          message: 'Pet\'s Name',
          holder: 'pet\'s name',
          value: ''
        },
        {
          message: 'Pet\'s Birthday',
          holder: 'pet\'s birthday (m/d/y)',
          value: ''
        },
        {
          message: 'Pet\'s Weight',
          holder: 'pet\'s weight (kg)',
          value: ''
        }
      ]
    }
  },
  methods: {
    changePic() {
      //TODO: change pic
    },
    submit() {
      var accountRepository = require('./Repositories/AccountRepository');
      var self = this;
      var tmp = [];
      for(var i = 0; i < this.items.length; i++) {
        var value = this.items[i].value;
        if(!value || value == '') {
          self.$ons.notification.alert('資料欄位請勿留空');
          return -1;
        }
        tmp.push(value);
      }
      
      var data = {
        userName: tmp[0],
        userEmail: tmp[1],
        petName: tmp[2],
        petBirth: tmp[3],
        petWeight: tmp[4],
        imagePath: this.imagePath
      }
      accountRepository.insert(data).then(function() {
        for(var i = 0; i < self.items.length; i++)
          self.items[i].value = '';

        self.$emit('close');
      }).catch(function(error) {
        self.$ons.notification.alert("webSQL didn't work");
      });
    }
  }
}
</script>

<style>
  .form {
    width: 90%;
    height: 90%;
    border-radius: 2%;
    position: relative;
    top: 10%;
    left: 5%;
  }

  .form-row {
    height: 10%;
  }

  .label {
    text-align: left;
    margin-left: 10%;
    padding-left: 3%;
  }

  .text-input--underbar {
    width: 60%;
    font-family: Skia !important;
    text-align: right;
    font-weight: lighter;
  }

  .text-input--underbar input {
    font-family: Skia !important;
  }

  #bottom {
    height: 20%
  }

  #button {
    width: 80%;
    height: 100%;
    background-color: rgba(255, 255, 0, 0.7);
    color: rgb(10, 10, 10);
    border-radius: 2%;
  }

  #changePic {
    background-color: rgba(255, 255, 0, 1);
    width: 10.5%;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    top: 18%;
    left: 59%;
    text-align: center;
  }

  .pic {
    top: 10%;
    height: 63%;
    width: 100%;
    position: relative;
  }
</style>

