<template>
  <v-ons-page class="page">
    <ons-row id="picture">
      <ons-col class="circle" align="center">
        <img class="title" src="../www/assets/img/food.png">
      </ons-col>
    </ons-row>

    <div id="food-body" style="margin-top:-3%">
      {{'What did ' + name + ' eat ?'}}
      <ons-row align="center" style="margin-top:5%;margin-bottom:5%">
        <ons-col width="50%" style="margin-left:20%">
          <v-ons-input class="search" float placeholder="Search"
            :v-ons-model="filter"></v-ons-input>
        </ons-col>
        <v-ons-button class="searchBtn" ripple @click="search"></v-ons-button>
      </ons-row>
      
      <div id="food-list">
        <ons-row align="center" class="list-row" v-for="item in items">
          <food-list :foodId="item.id" :name="item.name" :cal="item.cal" v-on:delete="update"></food-list>
        </ons-row>
        <v-ons-button id="food-add" @click="add" ripple></v-ons-button>
      </div>
    </div>

    <hr style="width:80%; margin-bottom:5%" class="my-hr">
    Daily Food
    <ons-row align="center" style="margin-top:4%">
      <ons-col style="text-align:center">
        <font style="font-size:4em" class="my-font">{{food}}</font>&nbsp;
        <font style="font-size:1.5em">/</font>&nbsp;
        <font style="font-size:4em" class="my-font">{{totalFood}}</font>&nbsp;kcal
      </ons-col>
    </ons-row>

    <date-bar></date-bar>

    <add-food :modalVisible="modalVisible" v-on:close="close"></add-food>
  </v-ons-page>
</template>

<script>
  import foodData from 'FoodData';
  import dateBar from 'DateBar';
  import foodList from 'FoodList';
  import addFood from 'AddFood';

  export default {
    methods: {
      push() {
        console.log(this.pageStack);
        this.pageStack.push(foodData);
      },
      search() {

      },
      add() {
        this.modalVisible = true;
      },
      close() {
        this.modalVisible = false;
        this.update();
      },
      update() {
        var foodRepository = require('./Repositories/FoodRepository');
        var self = this;

        foodRepository.getAll().then(function(result) {
          self.items = result;

          self.food = 0;
          for(var i = 0; i < self.items.length; i++) {
            self.food += parseInt(self.items[i].cal);
          }
        }).catch(function(error) {
          self.$ons.notification.alert("webSQL didn't work");
        });
      }
    },
    props: ['pageStack'],
    data() {
      return {
        modalVisible: false,
        name: '',
        filter: '',
        weight: '',
        food: 0,
        items: []
      }
    },
    computed: {
      totalFood() {
        return parseFloat(this.weight) * 65;
      }
    },
    updated: function() {
      var accountRepository = require('./Repositories/AccountRepository');
      var self = this;
      
      accountRepository.getAccountById(1).then(function(result) {
        self.name = result.petName;
        self.weight = result.petWeight;
      }).catch(function(error) {
        self.$ons.notification.alert("webSQL didn't work");
      });
    },
    mounted:function() {
      var accountRepository = require('./Repositories/AccountRepository');
      var self = this;
      
      accountRepository.getAccountById(1).then(function(result) {
        self.name = result.petName;
        self.weight = result.petWeight;
        
        self.update();
      }).catch(function(error) {
        self.$ons.notification.alert("webSQL didn't work");
      });
      
    },
    components: { dateBar, foodList, addFood }
  };
</script>

<style>
  #picture {
    text-align: center;
    height: 30%;
  }

  #food-body {
    height: 43%;
    width: 100%;
    text-align: center;
  }

  #food-list {
    width: 100%;
    height: 70%;
    overflow: auto;
  }

  #food-add {
    width: 10vw;
    height: 10vw;
    background-image: url('../www/assets/img/plus.png');
    background-position: top 50% left 50%;
    background-size: 70% 70%;
    background-repeat: no-repeat;
    background-color: rgba(255, 60, 120, 0.5);
    border-radius: 50%;
    margin-top: 2.5%;
  }

  .list-row {
    height: 23%;
    width: 60%;
    margin-left: 20%;
    margin-top: 2.5%;
  }

  .circle {
    width: 100%;
    height: 100%;
    background: rgba(200, 200, 200, 0.3);
    clip-path: circle(20% at 50% 50%);
  }

  .title {
    max-width: 20%;
    height: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .search {
    border: 1px solid rgba(128, 128, 128, 0.5);
    width: 90%;
    border-radius: 9%/50%;
    background-color: rgba(128, 128, 128, 0.1);
    padding-left: 5%;
  }

  .searchBtn {
    background-image: url('../www/assets/img/search.png');
    background-color: transparent;
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center !important;
    margin-right: 10%;
  }
</style>