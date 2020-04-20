<template>
  <div class="tiles" ref="tiles">
    <div class="search">
      <a-input-search placeholder="Search for a project" @search="onSearch" />
    </div>
    <div class="tilescontent">
      <k-tile v-for="(p,i) in projectData" :key="p.id" color="yellow" :width="2" :height="2" :background="'url(/assets/project/'+p.id+'/tile.png'" :style="{'animation-delay': 1000 + 200*i + 'ms'}">
        <k-project :data="p" :color="p.colors[0]"/>
      </k-tile>
    </div>
    <div class="more">
      
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>