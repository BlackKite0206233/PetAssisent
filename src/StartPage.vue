<template>
  <v-ons-page>
    <p style="text-align: center">
    </p>
  </v-ons-page>
</template>

<script>
  import homePage from 'homePage';
  export default {
     methods: {
       push() {
         this.pageStack.push(homePage);
       }
     },
     props: ['pageStack'],
  }
</script>

