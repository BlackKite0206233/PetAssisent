<template id="start">
  <v-ons-page>
   <ons-row class="row">
     <ons-col class="col" align="center">
       Pet Assistant
     </ons-col>
   </ons-row>
   <ons-row class="row">
     <ons-col class="col" v-if="isRenderBtn">
       <v-ons-button ripple @click="push">press</v-ons-button>
     </ons-col>
   </ons-row>
   <set-profile :modalVisible="modalVisible" v-on:close="close"></set-profile>
  </v-ons-page>
</template>

<script>
  import App from 'App';
  import setProfile from 'SetProfile';

  export default {
    methods: {
      push() {
        this.pageStack.push(App);
      },
      close() {
        this.modalVisible = false;
      }
    },
    props: ['pageStack'],
    data() {
      return {
        modalVisible: false,
        isRenderBtn: false
      }
    },
    mounted: function() {
      var self = this;
      var db;
      var request = window.indexedDB.open("App", 5);

      request.onerror = function(event) {
        self.$ons.notification.alert("IndexedDB didn't work");
      };
      request.onsuccess = function(event) {
        db = event.target.result;
      };
      request.onupgradeneeded = function(event) {
        var account = event.currentTarget.result.createObjectStore("account", { keyPath: "id", autoIncrement: true });
        account.createIndex("userName", "userName", { unique: false });
        account.createIndex("email", "email", { unique: false });
        account.createIndex("petName", "petName", { unique: false });
        account.createIndex("petBirthday", "petBirthday", { unique: false });
        account.createIndex("petWeight", "petWeight", { unique: false });
        account.createIndex("imagePath", "imagePath", { unique: false });

        var food = event.currentTarget.result.createObjectStore("food", { keyPath: "id", autoIncrement: true });
        food.createIndex("name", "name", { unique: false });
        food.createIndex("cal", "cal", { unique: false });
        food.createIndex("serving", "serving", { unique: false });
        food.createIndex("reaction", "reaction", { unique: false });
        food.createIndex("note", "note", { unique: false });

        var timer = event.currentTarget.result.createObjectStore("timer", { keyPath: "id", autoIncrement: true });
        timer.createIndex("hr", "hr", { unique: false });
        timer.createIndex("min", "min", { unique: false });
        timer.createIndex("date", "date", { unique: false });
        timer.createIndex("isOn", "isOn", { unique: false });
      };

      setTimeout(function() {
        self.isRenderBtn = true;

        var transaction = db.transaction("account", "readwrite");
        var account = transaction.objectStore("account");
        var getRequest = account.get(1);

        getRequest.onsuccess = function(event) {
          if(!getRequest.result)
            self.modalVisible = true;
        }

      }, 1000);
    },
    components: { setProfile }
  };
</script>

<style>
  .row {
    height: 50%;
  }

  .col {
    text-align: center !important;
  }
</style>