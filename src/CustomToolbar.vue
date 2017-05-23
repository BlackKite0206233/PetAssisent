<template>
  <v-ons-toolbar>
    <div id="ctrlbar">
    <div class="right">
      <v-ons-back-button :on-click="pop"></v-ons-back-button>
    </div>
    </div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: ['pop', 'img-name']
  }
</script>
