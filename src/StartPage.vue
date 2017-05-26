<template id="start">
  <v-ons-page>
    <div style="text-align:center">
      <v-ons-button ripple style="margin: 6px 0" @click="push">Hi</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
  import homePage from 'HomePage';

  export default {
     methods: {
       push() {
         this.pageStack.push(homePage);
       }
     },
     props: ['pageStack'],
  };
</script>

