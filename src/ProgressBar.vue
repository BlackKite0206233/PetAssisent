<template>
  <div>
  </div>
</template>

<script>
  var progressBar = require('progressbar.js');

  export default {
    props: ['colorIndex', 'value'],
    data() {
      return {
        color: [
          'rgba(255, 60, 120, 0.7)',
          'rgba(0, 128, 255, 0.7)'
        ]
      }
    },
    computed: {
      getColor() {
        return this.color[this.colorIndex];
      }
    },
    mounted: function() {
      var line = new progressBar.Line(this.$el, {
          color: this.getColor,
          strokeWidth: 5,
          svgStyle: {
            display: 'block',
            width: '70%',
            position: 'relative',
            margin: '2% 0% 0% 15%',
            borderRadius: '3%/50%'
          },
          trailColor: 'rgba(128, 128, 128, 0.3)',
          autoStyleContainer: true

        });

        line.animate(this.value / 100);
    }
  }
</script>

<style>
  .blueProgress {
    background-color: rgba(0, 128, 255, 0.9);
  }

  .redProgress {
    background-color: rgba(255, 96, 128, 0.9);
  }
</style>
