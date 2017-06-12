<template>
  <v-ons-page>
    <ctrlbar :title="title" :colorIndex="tabs[this.activeIndex].colorIndex" v-on:update="update"></ctrlbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import foodPageStack from 'FoodPageStack';
  import waterPageStack from 'WaterPageStack';
  import home from 'Home';
  import timer from 'Timer';
  import waterCtrl from 'WaterCtrl';
  import ctrlbar from 'Ctrlbar';

  import food from 'Food';
  import water from 'Water';

  export default {
    data() {
      return {
        activeIndex: 2,
        tabs: [
          {
            icon: this.md() ? null : 'food',
            label: 'FOOD',
            title: 'FOOD',
            page: foodPageStack,
            colorIndex: 0
          },
          {
            icon: this.md() ? null : 'water',
            label: 'WATER',
            title: 'WATER',
            page: waterPageStack,
            colorIndex: 1
          },
          {
            icon: this.md() ? null : 'homePage',
            label: 'HOME',
            title: 'HOME',
            page: home,
            colorIndex: 2
          },
          {
            icon: this.md() ? null : 'timer',
            label: 'TIMER',
            title: 'FEEDING CLOCK',
            page: timer,
            colorIndex: 3
          },
          {
            icon: this.md() ? null : 'waterCtrl',
            label: 'WATER CTRL',
            title: 'WATER CONTROL',
            page: waterCtrl,
            colorIndex: 1
          }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      },
      update() {
        this.$children[0].$children[1].$children[0].$children[0].$children[0].$children[0].$forceUpdate();
        this.$children[0].$children[1].$children[1].$children[0].$children[0].$children[0].$forceUpdate();
        this.$children[0].$children[1].$children[2].$forceUpdate();
      }
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].title;
      }
    },
    components: { foodPageStack, waterPageStack, home, timer, waterCtrl, ctrlbar }
  }
</script>

<style>
  .fa {
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center !important;
  }

  .fa-food {
    background-image: url('../www/assets/img/food.png');
  }

  .fa-water {
    background-image: url('../www/assets/img/water.png');
  }

  .fa-homePage {
    background-image: url('../www/assets/img/home.png');
  }

  .fa-timer {
    background-image: url('../www/assets/img/timer.png');
  }

  .fa-waterCtrl {
    background-image: url('../www/assets/img/waterCtrl.png');
  }
</style>
