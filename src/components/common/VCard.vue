<template>
  <div class="k-overlay" v-if="value" ref="vcard">
    <img src="/assets/vcard.svg" id="k-qr">
    <a-button class="vcardButton" v-cursor="'download'" @click="download">Télécharger</a-button>
    <a-button class="vcardButton" v-cursor="'close'" @click="close">Fermer</a-button>
    <a-button type="link" shape="circle" icon="close" @click="close" class="backBtn" v-cursor="'close'"/>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    async download() {
      this.$cursor.type = "blank"
      // Download file from url
      let a = document.createElement('a')
      a.href = '/assets/kevin.vcf'
      a.download = 'kevin.vcf'
      document.body.append(a)
      a.click()
      a.remove()
    },
    async close() {
      this.$refs.vcard.classList.add('k-close')
      setTimeout(() => {
        this.$cursor.type = "blank"
        this.$cursor.class = 'blank'
      }, 300)
      setTimeout(() => {
        this.$emit('input', false)
      }, 900);
    }
  },
  watch: {
    value(val) {
      val ? this.$cursor.class = 'black' : this.$cursor.class = 'blank' 
    }
  },
}
</script>

<style lang="scss">
  .k-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    opacity: 1;
    background-color: white;
    animation: background 600ms forwards;
    transition-duration: 600ms;

    .backBtn{
      width: 150px;
      height: 150px;
      top: 0;
      right: 0;
      position: fixed;

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

    #k-qr{
      width: 300px;
      animation: fade 300ms 600ms forwards;
      opacity: 0;
    }

    .vcardButton{
      background-color: black;
      color: white;
      border-radius: 2px;
      box-shadow: 0 0 0 1px black;
      padding: 5px 20px;
      height: auto;
      animation: fade 300ms 600ms forwards;
      opacity: 0;
      border-radius: 50px;
      margin: 30px;

      &:focus{
        border-color: grey;
      }

      &:hover{
        background-color: white;
        box-shadow: 
          0 0 0 0 black,
          inset 0 0 0 1px black;
        border-color: white;
        color: black;
      }
    }
  }
  .k-close{
    transition-delay: 300ms;
    top: 50%;
    bottom: 50%;
    overflow: hidden;

    .backBtn{
      opacity: 0;
    }
  }

  // Animations
  @keyframes background {
    from{
      right: 50%;
      left: 50%;
    }
    to{
      left: 0;
      right: 0;
    }
  }

  @keyframes fade {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>