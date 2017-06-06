<template>
  <v-ons-toolbar :class="getColor">
    <div class="center">{{ title }}</div>
    <div class="right">
      <v-ons-button class="setting" @click="actionSheetVisible = true;"></v-ons-button>
    </div>
    <v-ons-action-sheet
      :visible.sync="actionSheetVisible"
      cancelable
      title="Setting"
    >
      <v-ons-action-sheet-button ripple @click="changeProfile">change profile</v-ons-action-sheet-button>
      <v-ons-action-sheet-button ripple @click="exit">exit</v-ons-action-sheet-button>
      <v-ons-action-sheet-button ripple @click="actionSheetVisible = false;">cancel</v-ons-action-sheet-button>
    </v-ons-action-sheet>

    <change-profile :modalVisible="modalVisible" v-on:close="close"></change-profile>
  </v-ons-toolbar>
</template>


<script>
  import changeProfile from 'ChangeProfile';

  export default {
    props: ['title', 'colorIndex'],
    methods: {
      close() {
        this.modalVisible = false;
      },
      changeProfile() {
        this.actionSheetVisible = false;
        this.modalVisible = true;
      },
      exit() {
        if (navigator.app) {
          navigator.app.exitApp();
        } else if (navigator.device) {
          navigator.device.exitApp();
        } else {
          window.close();
        }
      }
    },
    data() {
      return {
        actionSheetVisible: false,
        modalVisible: false,
        color: [
          'red',
          'blue',
          'yellow',
          'oragne'
        ]
      }
    },
    computed: {
      getColor() {
        return this.color[this.colorIndex];
      }
    },
    components: { changeProfile }
  }
</script>

<style>
  .setting {
    background-image: url('../www/assets/img/setting.png');
    background-color: transparent;
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center !important;
    margin-right: 10%;
  }

  .red {
    background-color: rgba(255, 60, 120, 0.5);
  }

  .blue {
    background-color: rgba(0, 128, 255, 0.3);
  }

  .yellow {
    background-color: rgba(255, 255, 0, 0.4);
  }

  .oragne {
    background-color: rgba(255, 64, 0, 0.3);
  }
</style>
