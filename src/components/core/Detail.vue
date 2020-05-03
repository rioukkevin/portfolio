<template>
  <div class="k-detail">
    <a-col :span="4" />
    <a-col :span="8" v-if="data.type == 'left'" class="k-visu" style="padding: 0 40px">
      <img v-src="{time: 1000, src: '/assets/project/'+data.image}" >
    </a-col>
    <a-col :span="8" v-if="data.type != 'full'" class="k-description" style="padding:40px">
      <h2 class="k-subtitle">{{data.title}}</h2>
      <p>{{ data.description}}</p>
    </a-col>
    <a-col :span="8" v-if="data.type == 'right'" class="k-visu" style="padding: 0 40px">
      <img v-src="{time: 1000, src: '/assets/project/'+data.image}" >
    </a-col>
    <a-col :span="16" v-if="data.type == 'full'" class="k-visu-full" style="padding: 0 40px">
      <img v-src="{time: 1000, src: '/assets/project/'+data.image}" >
    </a-col>
    <a-col :span="4" />
  </div>
</template>

<script>
  export default {
    name: 'k-detail',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  .k-detail{
    display: flex;
    justify-content: center;
    align-items: center;

    .k-description{
      margin: 50px 0;
    }

    .k-subtitle{
      text-transform: uppercase;
      font-weight: 700;
    }

    .k-visu-full{
      max-height: 800px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: -100px;
      border-radius: 1000px;
      transition-duration: 300ms;
      z-index: 5;
      transition-delay: 0ms;

      &:hover{
        transform: scale(1.2);
        z-index: 3;
        transition-delay: 300ms;
      }

      img{
        max-height: 800px;
        max-width: 100%;
      }
    }

    .k-visu{
      max-height: 500px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: -100px;
      border-radius: 1000px;
      transition-duration: 300ms;
      z-index: 5;
      transition-delay: 0ms;

      &:hover{
        transform: scale(1.7);
        z-index: 3;
        transition-delay: 300ms;
      }

      img{
        max-height: 500px;
        max-width: 100%;
      }
    }
  }
</style>