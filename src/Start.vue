<template id="start">
  <v-ons-page>
   <ons-row class="row">
     <ons-col class="col" align="center">
       Pet Assistant
     </ons-col>
   </ons-row>
   <ons-row class="row">
     <ons-col class="col">
       <v-ons-button ripple @click="push">press</v-ons-button>
     </ons-col>
   </ons-row>
   <set-profile :modalVisible="modalVisible"></set-profile>
  </v-ons-page>
</template>

<script>
  import App from 'App';
  import setProfile from 'SetProfile';

  export default {
     methods: {
       push() {
         this.pageStack.push(App);
       }
     },
     props: ['pageStack'],
     data() {
       return {
         modalVisible: true
       }
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