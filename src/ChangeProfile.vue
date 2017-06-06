<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="form">
      <v-ons-toolbar>
        <div class="center">
          change profile
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="$emit('close')">cancel</v-ons-button>
        </div>
      </v-ons-toolbar>
      <ons-row id="picture">
        <ons-col class="circle" align="center">
          <img class="title" :src="imagePath">
        </ons-col>
        <v-ons-button id="changePic" ripple @click="changePic">
          <img class="pic" src="../www/assets/img/camera.png">
        </v-ons-button>
      </ons-row>
      <ons-row align="center" class="form-row" v-for="item in items">
        <ons-col width="50%" class="label">
          {{item.message}}
        </ons-col>
        <ons-col width="50%" style="text-align: left; padding-left:5%">
          <v-ons-input class="input" float 
            :placeholder="item.holder" 
            :v-ons-model="item.value"  
            :type="item.type"></v-ons-input>
        </ons-col>
      </ons-row>
      <div></div>
      <ons-row id="bottom" align="center">
        <ons-col style="text-align: center">
          <v-ons-button id="button" ripple @click="submit">Done</v-ons-button>
        </ons-col>
      </ons-row>
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
export default {
  props: ['modalVisible'],
  data() {
    return {
      imagePath: require('../www/assets/img/default.png'),
      yourName: 'Samuel',
      yourEmail: 'samuel@gmail.com',
      petName: 'latte',
      petBirth: '03/05/2014',
      petWeight: '4.0',
      items: [
        {
          message: 'Your Name',
          holder: 'your name',
          value: this.yourName,
          type: 'text'
        },
        {
          message: 'Your Email',
          holder: 'your email',
          value: this.yourEmail,
          type: 'text'
        },
        {
          message: 'Pet\'s Name',
          holder: 'pet\'s name',
          value: this.petName,
          type: 'text'
        },
        {
          message: 'Pet\'s Birthday',
          holder: 'pet\'s birthday (m/d/y)',
          value: this.petBirth,
          type: 'date'
        },
        {
          message: 'Pet\'s Weight',
          holder: 'pet\'s weight (kg)',
          value: this.petWeight,
          type: 'text'
        }
      ]
    }
  },
  methods: {
    changePic() {
      //TODO: change pic
    },
    submit() {
      this.$emit('close');
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

