<template>
  <div class="home" :class="{'vertical': isVertical}">
    <div class="header" ref="header">
      <k-who :scroll="scroll"/>
    </div>
    <h1 class="title-home" ref="title1" :style="{'--indent': (((scroll-1000)/4)*1) + 'px'}">Mon travail</h1>
    <k-project-list />
    <h1 class="title-home" ref="title2" :style="{'--indent': (((scroll-4000)/3)*1) + 'px'}">Ce que j'écoute</h1>
    <div class="zik">
      <k-music />
    </div>
    <h1 class="title-home" ref="title3" :style="{'--indent': (((scroll-4000)/3)*1) + 'px'}">Mes expériences</h1>
    <div class="experiences">
      <k-xp />
    </div>
    <div class="footer">
      <h1 class="title-home" ref="title4" :style="{'--indent': (((scroll-1000)/3)*-1) + 'px'}">Un peu plus d'infos</h1>
      <k-footer />
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      scroll: 0,
      blankBounding: {},
    }
  },
  computed: {
    isVertical(){
      // For mobile version next
      return this.$vssWidth < this.$vssHeight
    },
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  mounted () {
    this.repeatTitle(this.$refs.title1)
    this.repeatTitle(this.$refs.title2)
    this.repeatTitle(this.$refs.title3)
    this.repeatTitle(this.$refs.title4)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll(){
      this.scroll = window.scrollY
    },
    repeatTitle(el){
      let text = el.innerText
      let total = 20
      for(let i = 0; i < total; i++){
        el.insertAdjacentHTML('beforeend',' ' + text)
      }
    }
  },
  metaInfo: {
    title: '😎 Accueil',
    meta: [
      {property: 'og:title', content: 'RIOU Kevin - Portfolio 😎'},
      {property: 'og:site_name', content: 'RIOU Kevin'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://kevin.riou.pro'},
      {property: 'og:image', content: 'https://kevin.riou.pro/assets/me/mini.png'},
      {property: 'og:description', content: 'I am Groot. Ce Site web est mon portfolio est le point d\'entrée vers mon prfil pour le freelance. Vous pouvez me contacter pour avoir un peu plus d\'informations sur moi'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://kevin.riou.pro'},
      {name: 'twitter:title', content: 'RIOU Kevin - Portfolio 😎'},
      {name: 'twitter:description', content: 'I am Groot. Ce Site web est mon portfolio est le point d\'entrée vers mon prfil pour le freelance. Vous pouvez me contacter pour avoir un peu plus d\'informations sur moi'},
      {name: 'twitter:creator', content: '@RiouKevin6'},
      {name: 'twitter:image:src', content: 'https://kevin.riou.pro/assets/me/mini.png'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'RIOU Kevin - Portfolio 😎'},
      {itemprop: 'description', content: 'I am Groot. Ce Site web est mon portfolio est le point d\'entrée vers mon prfil pour le freelance. Vous pouvez me contacter pour avoir un peu plus d\'informations sur moi'},
      {itemprop: 'image', content: 'https://kevin.riou.pro/assets/me/mini.png'}
    ]
  }
}
</script>

<style lang="scss">
  .home{
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
    min-width: 100vw;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    overflow: hidden;

    h1.title-home{
      text-align: left;
      position: relative;
      min-width: 100%;
      color: white;
      font-size: 72px;
      text-transform: uppercase;
      white-space: nowrap;
      max-width: 100vw;
      font-weight: bold;
      text-indent: var(--indent);
      letter-spacing: 15px;
      margin-top: 250px;
      margin-bottom: 100px;
      z-index: 1;
      pointer-events: none !important;

      &::before, &::after{
        content: '';
        display: block;
        z-index: 2;
        background-color: rgba(200,200,200,1);
        width: 30%;
        height: 10px;
        position: absolute;
        box-shadow: 0 0 73px 81px black;
      }
      &::before{
        left: 0;
        top: -10px;
      }

      &::after{
        right: 0;
        bottom: -10px;
      }
    }

    .header{
      min-height: 100vh;
      width: 100%;
    }
    .zik{
      position: relative;
      // TODO work on style musique
    }
    .footer{
      min-height: 100vh;
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }
</style>