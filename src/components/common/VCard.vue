<template>
  <div class="k-overlay" v-if="value" @click="$emit('input',false)">
    <a-button id="vcardDownload" @click="download">Télécharger</a-button>
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
      window.open('/assets/kevin.vcf')
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
    z-index: 1000;
    opacity: 1;
    background-color: black;

    #vcardDownload{
      background-color: transparent;
      color: white;
      border-radius: 2px;
      box-shadow: 5px 5px 0 0 black,
        inset 5px 5px 0 0 black;
      padding: 5px 20px;
      height: auto;

      &:focus{
        border-color: grey;
      }

      &:hover{
        background-color: white;
        box-shadow: 0 0 0 0 black;
        border-color: white;
        color: black;
      }
    }
  }
</style>