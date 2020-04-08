<template>
  <div class="project" ref="projectpage" :style="{'--color':this.$route.params.color}">
    <div class="prev">
      <a-button type="link" shape="circle" icon="arrow-left" @click="back" class="backBtn" v-cursor="'left'"/>
      <div class="projectSwitch" v-if="side.p" @click="previous" v-cursor="'project'">
        Voir le projet {{ side.p.title }}
      </div>
    </div>
    <div class="background" ref="back">
      <div class="miniature" ref="miniature" :style="styleMiniature"/>
    </div>
    <h1 class="k-title" v-uppercase>
      {{ project.title }}
    </h1>
    <a-row>
      <a-col :span="24" class="k-top-project">
        <a-col :span="4" />
        <a-col :span="8" style="text-align: justify; padding: 40px">
          <h2 class="k-subtitle">Technologies</h2>
          <div class="k-tech-container">
            <p class="k-tech" v-for="(t,i) in project.technologies" :key="i">{{t}}</p>
          </div>
          <h2 class="k-subtitle">Introduction</h2>
          <p>{{ project.description }}</p>
        </a-col>
        <a-col :span="8" style="text-align: justify; padding: 40px">
          <k-palette :colours="project.colors" />
        </a-col>
        <a-col :span="4" />
      </a-col>
      <a-col :span="24" v-for="(det,i) in project.details" :key="i" style="text-align: justify; padding: 0 40px">
        <k-detail :data="det"/>
      </a-col>
    </a-row>
    <div class="next">
      <div class="projectSwitch" v-if="side.n" @click="next" v-cursor="'project'">
        Voir le projet {{ side.n.title }}
      </div>
    </div>
    <div class="full" ref="fullscreen"></div>
  </div>
</template>

<script>
import projects from '../services/project'
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'home',
  data() {
    return {
      projectId: "",
      project: {},
      side : {
        p: null,
        n: null 
      },
      projectComponent: null
    }
  },
  computed: {
    styleMiniature() {
      return {
        'background-image': 'url(/assets/project/'+this.project.id+'/miniature.png' || ''
      } 
    }
  },
  mounted () {
    this.mount();
  },
  methods: {
    async mount() {
      this.projectId = this.$route.params.id
      this.side.p = projects.previous(this.projectId)
      this.side.n = projects.next(this.projectId)
      let r = await projects.get(this.projectId)
      this.project = r
      this.projectComponent = r.id
      let b = this.$refs.back
      b.scrollIntoView();
      anime({
        targets: b,
        height: '350px',
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => {
          this.$refs.miniature.style.opacity = "1"
        }
      })
    },
    back(){
      let f = this.$refs.fullscreen
      f.style.backgroundColor = '#000'
      f.style.left = '-102vw'
      f.style.top = '0'
      anime({
        targets: f,
        left: '0',
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => {
          this.$router.push({ name: 'home' })
        }
      })
    },
    fullscreenTop(color){
      let f = this.$refs.fullscreen
      f.style.backgroundColor = color
      anime({
        targets: f,
        top: '0',
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => {
          this.$router.push({name: 'redirect', params: {name: 'project', p: {id: this.side.p.id, color: this.side.p.colors[0]}}})
        }
      })
    },
    fullscreenBottom(color){
      let f = this.$refs.fullscreen
      f.style.backgroundColor = color
      f.style.top = '102vh'
      anime({
        targets: f,
        top: '0',
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => {
          this.$router.push({name: 'redirect', params: {name: 'project', p: {id: this.side.n.id, color: this.side.n.colors[0]}}})
        }
      })
    },
    previous(){
      // eslint-disable-next-line no-console
      console.log(this.side)
      this.fullscreenTop(this.side.p.colors[0])
    },
    next(){
      this.fullscreenBottom(this.side.n.colors[0])
    }
  },
  metaInfo: {
    title: '😝 Projet',
  }
}
</script>

<style lang="scss">
  .project{
    text-align: center;
    color: #2c3e50;
    min-height: calc(100% + 300px);
    width: 100%;
    background: #eee;

    p{
      font-size: 20px;
    }

    .k-tech-container{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 35px;
      
      .k-tech{
        margin: 0 40px 10px 0;
      }
    }
    

    .k-subtitle{
      text-transform: uppercase;
      font-weight: 700;
    }

    .full{
      position: fixed;
      z-index: 5;
      top: -102vh;
      left: 0;
      width: 100%;
      height: 100vh;
    }
    .next{
      border-top: #afafaf solid 1px;
      margin-top: 150px;
    }

    .prev, .next{
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      .projectSwitch{
        font-size: 20px;
        text-transform: uppercase;
        transform: scale(1);
        transition-duration: 300ms;

        &:hover{
          transform: scale(1.2);
          font-weight: bold;
          color: var(--color);
        }

        &::selection{
          color: inherit;
          background-color: transparent;
        }
      }

      .backBtn{
        width: 150px;
        height: 150px;
        top: 30;
        left: 0;
        position: absolute;

        i{
          width: 50px;
          height: 50px;

          svg{
            fill: black;
            width: 50px;
            height: 50px;
            transition-duration: 500ms;

            &:hover{
              fill: #ff2565;
            }
          }
        }
      }
    }

    .background{
      background-color: var(--color);
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      overflow: hidden;

      .miniature{
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: 110% auto;
        opacity: 0;
        transition-duration: 500ms;

        &:hover{
          background-size: 100% auto;
        }
      }
    }

    .k-top-project{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .k-title{
      color: var(--color);
      font-weight: 700;
      text-align: left;
      margin: 0px 40px 20px 40px;
      font-size: 110px;
      transform-origin: left;
      display: flex;
      flex-direction: row;
      position: relative;
      z-index: 1;

      .letter{
        display: block;
        letter-spacing: -5px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 10px !important;
    height: 0;
  }
</style>