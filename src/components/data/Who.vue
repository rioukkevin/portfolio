<template>
  <div class="k-who">
    <k-vcard v-model="vcard" />
    <k-logo :size="[50,50]" :fill="rainbow" :r="2" :k="2" />
    <div ref="name" class="k-name-container">RIOU KEVIN</div>
    <h2 class="k-job">Fullstack web developer</h2>
    <p class="k-description">
      Salut, moi c'est Kévin, je suis un jeune étudiant à MyDigitalSchool travaillant en alternance dans l'entreprise Pasquier et en Freelance à mon compte. N'hésitez pas à vous balader sur mon site pour voir quelques réalisations que j'ai faites.
      <a-button id="addContact" class="k-button" v-cursor="'contact'" @click="vcard = true">
        Ajouter le contact
      </a-button>
    </p>
    <span class="k-punchline">Have a nice day and be happy</span>
    <img src="/assets/me/head3.webp" loading="lazy" class="k-me" :style="{right: (scroll/12) + 'px'}">
    <div class="k-social">
      <a href="mailto:riou.kkevin@gmail.com" v-cursor="'email'">Email</a>
      <a href="tel:+33618260849" v-cursor="'tel'">Tèl</a>
      <a target="_blank" href="https://www.instagram.com/rioukkevin/" v-cursor="'instagram'">Instagram</a>
      <a target="_blank" href="https://www.linkedin.com/in/k%C3%A9vinriou/" v-cursor="'linkedin'">Linkedin</a>
      <a target="_blank" href="https://github.com/rioukkevin" v-cursor="'github'">Git</a>
    </div>
  </div>
</template>

<script>
import mixinRainbow from '@mixins/rainbow.animation'
import animation from '@mixins/who.animation'

export default {
  mixins: [mixinRainbow,animation],
  props: {
    scroll: {
      type: Number,
      default: 0 
    },
  },
  data() {
    return {
      vcard: false
    }
  },
  mounted () {
    let name = this.$refs.name.textContent
    let container_letter = this.$refs.name
    this.$refs.name.innerHTML = ""
    const number = 5
    for (let ind = 0; ind < name.length; ind++) {
      const l = name[ind]
      const color = "rgb(toto,toto,toto)"
      const line = document.createElement('div')
      line.classList.add('line_letter')
      line.innerHTML='<span class="l" style="color:'+color.replace(/toto/g,'255')+';z-index:'+(number+1)+'">'+ l +'</span>'
      for (let index = 0; index < number; index++) {
        let col = 100 - ((100/(number - 2))*index)
        line.insertAdjacentHTML('beforeend','<span class="l" style="color:'+color.replace(/toto/g,col)+';z-index:'+(number - (index))+'">'+ l +'</span>')
        line.insertAdjacentHTML('afterbegin','<span class="l" style="color:'+color.replace(/toto/g,col)+';z-index:'+(number - (index))+'">'+ l +'</span>')  
      }
      container_letter.insertAdjacentHTML('beforeend','<div class="k-name-line" style="margin-left:'+(Math.random() * 100)+'px">'+line.innerHTML+'</div>') 
    }
  },
}
</script>

<style lang="scss">
  @import '../../styles/variable.scss';

  .k-who{
    text-align: left;
    color: white;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .k-logo{
      position: fixed;
      top: 30px;
      left: 30px;
      z-index: 999;
      filter: grayscale(1) brightness(300%);
      transition-duration: filter 300ms;

      &:hover{
        filter: grayscale(0) brightness(100%);
      }
    }

    .k-name-container{
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      animation: inFade 500ms forwards;

      .k-name-line{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        transition-duration: 300ms;

        &:hover{
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .l{
          width: 40px;
          height: 80px;
          font-size: 100px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
          box-shadow: 0 0 60px 30px  #000;
          transition-duration: 250ms;

          &:hover{
            filter: blur(5px);
          }
        }
      }
    }

    .k-job{
      font-size: 25px;
      font-weight: 100;
      color: inherit;
      z-index: 20;
      animation: inScale 500ms forwards;
      position: absolute;
      top: 50%;
      right: 300px;
      font-weight: 700;
      text-shadow: 0px 0px 20px #000000;
    }

    .k-description{
      max-width: 600px;
      font-size: 18px;
      font-weight: 100;
      color: inherit;
      z-index: 20;
      position: absolute;
      right: 300px;
      top: calc(50% + 50px);
      text-align: right;
      text-shadow: 0px 0px 20px #000000;
      animation: inScale 500ms forwards;
    }

    #addContact{
      position: absolute;
      right: 0;
      bottom: -70px;
    }

    .k-punchline{
      font-size: 16px;
      line-height: 18px;
      font-weight: 100;
      color: white;
      z-index: 15;
      animation: inScale 500ms forwards;
      position: absolute;
      right: 50px;
      bottom: 50px;
    }
    .k-me{
      position: absolute;
      animation: inFade 1000ms forwards;
      right: 20px;
      bottom: 0px;
      height: calc(100vh - 50px);
      z-index: 5;
    }
    .k-social{
      position: absolute;
      right: 60px;
      top: 30px;
      z-index: 22;
      display: flex;

      a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 20px;
        transition-duration: 300ms;
        cursor: none;

        &:hover{
          filter: blur(3px);
        }
      }
    }

  }

  @keyframes inFade {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  @keyframes inScale {
    from{
      transform: scale(0);
    }
    95%{
      transform: scale(1.05);
    }
    to{
      transform: scale(1);
    }
  }
</style>