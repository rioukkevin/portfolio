<template>
  <div class="k-unicorn">
    <img style="transform: scaleX(-1);" width="100%" height="100%" src="/assets/unicorn.webp" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .k-tile{
    .k-unicorn{
      position: absolute;
      width: 320px;
      height: 320px;
      margin: -160px;
      top: 50%;
      left: 50%;
      transform-origin: center center;
      transform: rotate(-35deg);
      transition-duration: 800ms;
      will-change: transform;
      filter: grayscale(1);
    }
    &:hover{
      .k-unicorn{
        transform: rotate(552deg);
      }
    }
  }
</style>