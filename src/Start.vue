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
    created: function() {
      var self = this;
      var databaseSetting = require('./Repositories/DatabaseSetting');

      databaseSetting.databaseInit().catch(function() {
        self.$ons.notification.alert("webSql didn't work");
        if (navigator.app) {
          navigator.app.exitApp();
        } else if (navigator.device) {
          navigator.device.exitApp();
        } else {
          window.close();
        }
      })
    },
    mounted: function() {
      var self = this;
      var accountRepository = require('./Repositories/AccountRepository');

      setTimeout(function() {
        self.isRenderBtn = true;

        accountRepository.getAccountById(1).catch(function(error) {
          console.log(error);
          self.modalVisible = true;
        });
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