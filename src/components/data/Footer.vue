<template>
  <div class="k-footer">
    <div class="k-footer-column">
      <a-input />
    </div>
    <div class="k-footer-column">
      <h3>Contacts</h3>
      <a target="_blank" href="mailto:riou.kkevin@gmail.com">riou.kkevin@gmail.com</a>
      <a target="_blank" href="tel:+33618260849">06.18.26.08.49</a>
    </div>
    <div class="k-footer-column">
      <h3>Crédits</h3>
      <a href="https://iconscout.com/contributors/jemismali">Jemis Mali pour les icones de la barre de statut IphoneXS</a>
    </div>
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'contact',
  mounted () {
  },
  methods: {

  },
}
</script>

<style lang="scss">
  .k-footer{
    width: 100%;
    height: 100vh;
    transition-duration: 500ms;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;

    .k-footer-column{
      width: 500px;
      display: flex;
      flex-direction: column;
      margin: 60px;

      h3{
        color: white;
        font-size: 25px;
        white-space: nowrap;
      }

      a{
        color: white;
      }
    }
  }
</style>