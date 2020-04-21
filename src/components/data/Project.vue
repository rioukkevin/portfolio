<template>
  <div class="k-project" v-cursor="'project'">
    <div class="overlay" ref="overlay" :style="{'--color':color}" @click="open">
      <h1>{{data.title || ''}}</h1>
      <h2>{{data.job}}</h2>
      <p>{{data.description || ''}}</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
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
  methods: {
    open() {
      let o = this.$refs.overlay
      let top = o.getBoundingClientRect().y;
      let left = o.getBoundingClientRect().x;
      let ew = window.innerWidth
      let eh = window.innerHeight
      o.style.transitionDuration = "0ms"
      o.classList.add("transition-start")
      let Vue = this
      this.$nextTick(() => {
        o.style.position = 'fixed'
        o.style.left = left + 'px';
        o.style.top = top + 'px';
        o.style.width ='700px';
        o.style.height = '700px';
        o.style.zIndex= "50"
        this.$nextTick(() => {
          anime({
            targets: o,
            left: 0,
            top: 0,
            width: ew + 'px',
            height: eh + 'px',
            duration: 1000,
            easing: 'easeOutExpo',
            complete: function() {
              o.classList.add("transition-end")
              Vue.$router.push({name: 'project', params: {id: Vue.data.id, color: Vue.color}})
              Vue.$cursor.type = "blank"
            }
          })
        })
      })
    }
  },
}
</script>

<style lang="scss">
  .k-project{

    .overlay{
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      border-radius: 2px;
      background-color: rgba(0,0,0,0.2);
      position: absolute;
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
        top: 50px;
        font-size: 25px;
        font-weight: bold;
        color: white;
        opacity: 1;
        transition-duration: 500ms;
        text-transform: uppercase;
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