<template>
  <v-ons-button class="food-list-btn" ripple @click="edit">
    <ons-row align="center" style="width:100%;padding-top:2.5%">
      <ons-col width="75%" class="food-list-name">
        {{getName}}
      </ons-col>
      <ons-col>
        <font class="my-font" style="font-weight:bold">{{cal}}</font>
        <font style="font-weight:lighter">kcal</font>
      </ons-col>
    </ons-row>
    <edit-food :modalVisible="modalVisible" v-on:close="close"></edit-food>
  </v-ons-button>
</template>

<script>
  import editFood from 'EditFood';

  export default {
    props: ['name', 'cal'],
    data() {
      return {
        modalVisible: false,
      }
    },
    computed: {
      getName() {
        var maxLength = 18;
        if(this.name.length >= maxLength)
          return this.name.substring(0, maxLength) + '...';

        return this.name;
      }
    },
    methods: {
      edit() {
        this.modalVisible = true;
      },
      close() {
        this.modalVisible = false;
      }
    },
    components: { editFood }
  }
</script>

<style>
  .food-list-btn {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 60, 120, 0.85);
    border-radius: 8%/50%;
    color: black;
    font-family: Skia;
  }

  .food-list-name {
    font-weight:lighter;
    text-align: left;
    overflow: hidden;
  }
</style>
