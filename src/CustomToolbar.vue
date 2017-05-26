<template>
  <v-ons-toolbar>
    <div id="ctrlbar">
      <div class="right">
        <v-ons-back-button>back</v-ons-back-button>
      </div>
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
