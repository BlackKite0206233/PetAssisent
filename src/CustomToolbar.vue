<template>
  <v-ons-toolbar v-bind:style="{backgroundImage: 'url(../res/img/' + imgName + '.png)'}">
    <div id="ctrlbar">
        <v-ons-back-button></v-ons-back-button>
    </div>
    <p>
      {{imgName}}
    </p>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: ['pop', 'imgName']
  }
</script>
