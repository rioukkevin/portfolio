<template>
  <div class="k-new-project" v-cursor="'project'" :style="{'--background': 'url(/assets/project/'+data.id+'/tile.webp'}">
    <div class="overlay" ref="overlay" :style="{'--color':color}" @click="animation_open">
      <h1 v-title >{{data.title || ''}}</h1>
      <h2>{{data.job}}</h2>
      <p>{{data.description || ''}}</p>
    </div>
  </div>
</template>

<script>
import animation from '@mixins/project.animation'

export default {
  mixins: [animation],
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: () => "white"
    }
  },
}
</script>

<style lang="scss">
  .k-new-project{
    width: 600px;
    height: 600px;
    background-color: yellow;
    background-image: var(--background);
    box-shadow: inset 0 0 0 20px #333;
    transition-duration: 300ms;
    background-size: auto 100%;
    background-position: center center;
    transition-delay: 0ms;

    &:hover{
      transition-delay: 30ms;
      box-shadow: inset 0 0 0 0 #333;
      background-size: auto 150%;
    }

    .overlay{
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      border-radius: 2px;
      background-color: rgba(0,0,0,0.2);
      position: relative;
      top: 20px;
      left: 20px;
      padding: 40px;
      transition-duration: 300ms;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;


      &:hover{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--color);

        h2{
          top: 250px;
          transition-delay: 0ms;
        }

        h1{
          opacity: 1;
          top: 200px;
          &::before{
            top: -10px;
          }
        }
        p{
          opacity: 1;
          transition-delay: 200ms;
        }
      }
      
      h1{
        position: absolute;
        white-space: nowrap;
        left: 50px;
        width: calc(100% - 100px);
        max-width: calc(100% - 100px);
        top: 50px;
        font-size: 25px;
        font-weight: bold;
        color: white;
        opacity: 1;
        transition-duration: 500ms;
        // text-transform: uppercase;
        text-align: left;
        z-index: 2;

        &::before{
          display: block;
          position: absolute;
          content: '';
          z-index: -1;
          top: 10px;
          left: 0;
          width: 100%;
          height: 35px;
          background-color: var(--color);
          opacity: 0.7;
          transition-duration: 500ms;
        }
      }

      h2{
        position: absolute;
        left: 50px;
        top: 100px;
        color: white;
        transition-duration: 300ms;
        transition-delay: 200ms;
      }

      p{
        position: absolute;
        left: 50px;
        top: 350px;
        font-size: 20px;
        width: 500px;
        margin: 0;
        text-align: justify;
        color: white;
        text-align: justify;
        margin-right: 20px;
        opacity: 0;
        transition-duration: 300ms;
        transition-delay: 0;
      }

      &.transition-start{
        h1,h2,p{
          opacity: 0;
          transition-duration: 500ms;
        }
      }
    }
  }
</style>