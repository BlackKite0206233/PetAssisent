<template>
  <ul class="list">
    <li class="list__item list__item--tappable" v-for="name in items.name">
      <label class="list__item__center">
        {{name}}
      </label>
      <div class="list__item__right">
        <label class="checkbox checkbox--noborder">
          <input id="s1" type="checkbox" class="checkbox__input checkbox--noborder__input">
          <div class="checkbox__checkmark checkbox--noborder checkbox--noborder__checkmark"></div>
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>
  .list {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .list__item {
    height: 14%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  }

  .list__item__center {
    width: 80%;
    float: left;
    padding-left: 5%;
    padding-top: 4%;
    font-family: Skia;
    font-weight: lighter;
  }

  .list__item__right {
    width: 10%;
    float: left;
    margin-top: 4%;
  }
</style>
