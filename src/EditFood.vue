<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="food-form">
      <v-ons-toolbar>
        <div class="center">
          food information
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="$emit('close');">cancel</v-ons-button>
        </div>
      </v-ons-toolbar>
      
      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Name of Food
        </ons-col>
        <ons-col width="50%" class="food-data-col">
          {{foodName}}
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Calories
        </ons-col>
        <ons-col width="50%" class="food-data-col">
          {{cal}}
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Number of Servings
        </ons-col>
        <ons-col width="50%" class="food-data-col">
          {{serving}}
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          {{petName}}'s Reaction
        </ons-col>
        <ons-col width="50%" class="food-data-col">
          {{reaction}}        
        </ons-col>
      </ons-row>
      <hr class="my-hr" style="width:90%">

      <ons-row align="center" class="food-data-row">
        {{note}}
      </ons-row>

      <ons-row id="bottom" align="center">
        <ons-col style="text-align: center">
          <v-ons-button id="add-food-btn" ripple @click="deleteFood">Delete</v-ons-button>
        </ons-col>
      </ons-row>
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
export default {
  props: ['foodId', 'modalVisible'],
  data() {
    return {
      foodName: '',
      cal: 0,
      serving: '',
      reaction: 0,
      note: '',
      petName: '',
    }
  },
  methods: {
    deleteFood() {
      var foodRepository = require('./Repositories/FoodRepository');
      var self = this;

      foodRepository.deleteFood(self.foodId).then(function() {
        self.$emit('close');
      }).catch(function(error) {
        self.$ons.notification.alert("cannot delete");
      })
    }
  },
  mounted: function() {
    var accountRepository = require('./Repositories/AccountRepository');
    var foodRepository = require('./Repositories/FoodRepository');
    var self = this;

    accountRepository.getAccountById(1).then(function(result) {
      self.petName = result.petName;

      foodRepository.getFoodById(self.foodId).then(function(result) {
        self.foodName = result.name;
        self.cal = result.cal;
        self.serving = result.serving;
        self.reaction = result.reaction;
        self.note = result.note;
      });
    }).catch(function(error) {
      self.$ons.notification.alert("webSQL didn't work");
    })
    
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

  .food-data-row {
    height: 15%;
    padding: 0% 10% 3% 10%;
    overflow: scroll;
  }

  .food-data-col {
    text-align: right;
    padding-right: 10%;
  }

</style>

