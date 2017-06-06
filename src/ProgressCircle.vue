<template>
  <div>
  </div>
</template>

<script>
  var progressBar = require('progressbar.js');

  export default {
    props: ['value'],
    mounted: function() {
      var circle = new progressBar.Circle(this.$el, {
        color: 'rgba(0, 128, 255, 0.6)',
        strokeWidth: 5,
        svgStyle: {
          display: 'block',
          width: '60%',
          position: 'relative',
          margin: '-5% 0% 0% 25%',
        },
        trailColor: 'rgba(128, 128, 128, 0.3)',
        text: {
          value: this.value + '%',
          className: 'progressbar__label',
          style: {
            color: 'rgba(128, 128, 128, 0.5)',
            position: 'absolute',
            left: '55%',
            top: '50%',
            padding: 0,
            margin: 0,
            transform: {
              prefix: true,
              value: 'translate(-50%, -50%)'
            }
          }
        },
        autoStyleContainer: true

      });

      circle.animate(this.value / 100);
    }
  };
</script>

<style>
  .progressbar__label {
    font-size: 1.8em;
    font-family: 'Dekar Light';
    color: black !important;
  }
</style>
