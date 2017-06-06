<template>
  <ons-row align="center" style="height:7%;background-color:rgba(128, 128, 128, 0.2);margin-top:2%">
    <ons-col style="text-align:center">
      {{date}}
    </ons-col>
  </ons-row>
</template>

<script>
  export default {
    computed: {
      date() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if(month < 10) month = '0' + month;
        if(day < 10) day = '0' + day;

        return year + '/' + month + '/' + day;
      }
    },
  }
</script>

<style>

</style>
