<template>
  <div class="tiles" ref="tiles">
    <div class="search" :style="{width:searchWidth}">
      <a-input-search v-cursor="'text'" v-model="projectFilter" placeholder="Search for a project" style="width: 100%" />
    </div>
    <div class="tilescontent">
      <k-tile ref="toto" v-for="(p) in projectData" :key="p.id" color="white" :width="2" :height="2" :background="'url(/assets/project/'+p.id+'/tile.webp'">
        <k-project :data="p" :color="p.colors[0]"/>
      </k-tile>
    </div>
  </div>
</template>

<script>
import animation from '@mixins/projectlist.animation'
import data from '@mixins/projectlist.data'

export default {
  mixins: [animation, data],
  computed: {
    searchWidth(){
      const num = Math.floor(this.$vssWidth / 600)
      const res = (num * 600) - 40
      return res + 'px'
    }
  }
}
</script>

<style lang="scss">
  @keyframes tiles {
    from{
      opacity: 0
    }
    to{
      opacity: 1;
    }
  }

  .tiles{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .search{
      cursor: none !important;
      margin-bottom: 40px;
      margin-top: 40px;

      input{
        height: 60px;
        border-color: white !important;
        border-width: 2px;
        padding: 0 50px;
        border-radius: 0;
        font-size: 20px;
        background-color: transparent;
        cursor: none !important;
      }

      svg{
        width: 20px;
        height: 20px;
        margin-right: 50px;
      }

      &:hover{
        input{
          background-color: white;
          border-color: #F8F301 !important;
        }
      }
    }

    .tilescontent{
      min-height: 700px; 
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      align-items: center;

      .k-tile{
        animation: backwards tiles 500ms;
      }
    }
  }
</style>