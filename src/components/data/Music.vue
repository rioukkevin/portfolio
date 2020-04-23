<template>
  <div class="k-song">
    <div class="back">
      <img ref="albumb" class="mini" :src="'/assets/music/'+ dat.id +'.webp'" >
    </div>
    <div class="music-content" >
      <img ref="album" class="mini" :src="'/assets/music/'+ dat.id +'.webp'" >
      <div class="song" ref="song">{{ dat.title }}</div>
      <a-button type="primary" class="listen" @click="go(dat.link)" v-cursor="'play'">Ecouter</a-button>
      <a-button type="icon" icon="right" class="next" @click="animation_next" v-cursor="'right'"></a-button>
      <a-button type="icon" icon="left" class="previous" @click="animation_previous" v-cursor="'left'"></a-button>
    </div>
  </div>
</template>

<script>
import animation from '@mixins/music.animation'
import data from '@mixins/music.data'

export default {
  name: 'music',
  mixins: [animation, data],
  data() {
    return {
      current: 'billy',
      dat: {}
    }
  },
  mounted () {
    this.data_update()
  },
  methods: {
    go(link){
      window.open(link, "_blank");
    },
  },
}
</script>

<style lang="scss">
  .k-song{
    width: 100vw;
    height: 400px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .back,.mini{
      position: absolute;
    }

    .back{
      top: 0;
      left: 0;
      filter: blur(20px);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img{
        min-width: 100%;
        min-height: 100%;
      }
    }

    .music-content{
      position: relative;
      width: 700px;
      height: 400px;

      &:hover{
        .mini{
          transform: scale(1.2);
        }
      }

      .mini{
        width: 300px;
        height: 300px;
        top: 50px;
        left: 50px;
        transition-duration: 400ms;
      }

      .song{
        position: absolute;
        left: 250px;
        top: 70px;
        background-color: rgba(0, 0, 0, 0.534);
        line-height: 30px;
        text-align: left;
        padding: 5px 50px;
        color: white;
        letter-spacing: 1px;
      }

      .previous,.next{
        position: absolute;
        width: 40px;
        height: 40px;
        border: 0px solid red;
        background-color: #1db954;
        border-radius: 0;
        transition-duration: 400ms;

        &:hover{
          transform: scale(1.2);
        }

        i{
          color: white;
        }
      }

      .previous{
        bottom: 30px;
        left: 150px;
      }
      .next{
        bottom: 30px;
        left: 210px;
      }

      .listen{
        position: absolute;
        top: 160px;
        left: 300px;
        height: 50px;
        width: 150px;
        border: 0px solid red;
        background-color: #1db954;
        color: white;
        box-shadow: none;
        border-radius: 0;
        font-size: 17px;
        transition-duration: 400ms;

        &:hover{
          transform: scale(1.2);
          color: white;
        }
      }
    }

  }
</style>