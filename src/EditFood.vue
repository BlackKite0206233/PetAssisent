<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="food-form">
      <v-ons-toolbar>
        <div class="center">
          edit food
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="$emit('close')">cancel</v-ons-button>
        </div>
      </v-ons-toolbar>
      
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
export default {
  props: ['modalVisible'],
  data() {
    return {
      
    }
  }
}
</script>

<style>
  .close {
    background-color: transparent;
    margin-right: 10%;
    color: rgb(128, 128, 255);
    font-family: Skia;
    font-weight: lighter;
  }

</style>

