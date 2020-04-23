<template>
  <div id="app" ref="app">
    <k-cursor />
    <router-view/>
    <div class="dev">
      Site web en construction 
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: '%s | RIOU Kévin'
  },
}
</script>

<style lang="scss">

img.emoji {
   height: 1em;
   width: 1em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.1em;
}

html{
  overflow-x: hidden;
  cursor: none !important;
}

#app {
  font-family: 'bigjohn', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: rgb(235,235,235);
}

::-webkit-scrollbar-track {
  background: #ebebeb;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #667eea 0%,#764ba2 100% );
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #4d5fb1 0%,#42295a 100% );
}

.ant-btn{
  cursor: none !important;
}

.dev{
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  text-transform: uppercase;
  background-color: black;
  top: 0;
  left: 120vw;
  width: 100vw;
  height: 100vh;
  color: white;
  font-weight: 700;
}
</style>
