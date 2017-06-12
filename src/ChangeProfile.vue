<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="form">
      <v-ons-toolbar>
        <div class="center">
          change profile
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="$emit('close')">cancel</v-ons-button>
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
      imagePath: '',
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
      accountRepository.edit(data).then(function() {
        for(var i = 0; i < self.items.length; i++)
          self.items[i].value = '';

        self.$emit('close');
      }).catch(function(error) {
        console.log(error);
        self.$ons.notification.alert("webSQL didn't work");
      });
    }
  },
  mounted: function() {
    var accountRepository = require('./Repositories/AccountRepository');
    var self = this;

    accountRepository.getAccountById(1).then(function(result) {
      self.imagePath = result.imagePath;
      self.items[0].value = result.userName;
      self.items[1].value = result.userEmail;
      self.items[2].value = result.petName;
      self.items[3].value = result.petBirth;
      self.items[4].value = result.petWeight;   
    }).catch(function(error) {
      console.log(error);
      self.$ons.notification.alert("error");  
    });
  }
}
</script>

<style>
  .close {
    background-color: transparent;
    margin-right: 10%;
    color: rgb(128, 128, 255);
    font-family: Skia;
    font-weight: lighter;
  }

</style>

