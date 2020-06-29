<template>
  <div class="k-detail" :style="{'--col': color}">
    <a-col :xs="1" :lg="2" />
    <a-col :xs="22" :lg="20" class="k-description" style="padding:40px">
      <h2 class="k-subtitle" v-title>{{data.title}}</h2>
      <p>{{ data.description}}</p>
    </a-col>
    <a-col :xs="1" :lg="2" />
  </div>
</template>

<script>
  export default {
    name: 'k-detail',
    props: {
      data: {
        type: Object,
        default: () => {}
      },
      color: {
        type: String,
        default: () => '#000'
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/variable.scss';

  .k-detail{
    display: flex;
    justify-content: center;
    align-items: center;

    .k-description{
      margin: 25px 0;
    }

    .k-subtitle{
      font-weight: 700;
    }
  }
</style>