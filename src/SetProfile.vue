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
      <ons-row align="center" class="form-row" v-for="item in items">
        <ons-col width="30%" class="label">
          {{item.message}}
        </ons-col>
        <ons-col width="60%">
          <v-ons-input class="text-input--underbar profile-input" float 
            :placeholder="item.holder" 
            v-model="item.value"  
            :type="item.type"></v-ons-input>
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
      imagePath: require('../www/assets/img/default.png'),
      items: [
        {
          message: 'Your Name',
          holder: 'your name',
          value: '',
          type: 'text'
        },
        {
          message: 'Your Email',
          holder: 'your email',
          value: '',
          type: 'text'
        },
        {
          message: 'Pet\'s Name',
          holder: 'pet\'s name',
          value: '',
          type: 'text'
        },
        {
          message: 'Pet\'s Birthday',
          holder: 'pet\'s birthday (m/d/y)',
          value: '',
          type: 'date'
        },
        {
          message: 'Pet\'s Weight',
          holder: 'pet\'s weight (kg)',
          value: '',
          type: 'text'
        }
      ]
    }
  },
  methods: {
    changePic() {
      //TODO: change pic
    },
    submit() {
      var self = this;
      var data = [];
      for(var i = 0; i < this.items.length; i++) {
        var value = this.items[i].value.srcElement.value;
        if(!value || value == '') {
          self.$ons.notification.alert('資料欄位請勿留空');
          return -1;
        }
        data.push(value);
      }
      var db;
      var request = window.indexedDB.open("App", 5);

      request.onerror = function(event) {
        self.$ons.notification("IndexedDB didn't work");
      };
      request.onsuccess = function(event) {
        db = event.target.result;
        
        var transaction = db.transaction("account", "readwrite");
        var account = transaction.objectStore("account");                    
        var request = account.add({ userName: data[0],
                                    email: data[1], 
                                    petName:data[2],
                                    petBirthday: data[3],
                                    petWeight: data[4],
                                    imagePath: self.imagePath });

        request.onsuccess = function (evt) {
            self.$emit('close');                        
        };
        request.onerror = function (evt) {
            self.$ons.notification.alert("error");                      
        };
      };
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

