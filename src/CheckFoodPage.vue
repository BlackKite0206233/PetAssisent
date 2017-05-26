<template>
  <v-ons-page>
    <custom-toolbar :imgName="'checkFood'"></custom-toolbar>
    <div id="calendar">
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from 'CustomToolbar';
  import app from 'App';

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
