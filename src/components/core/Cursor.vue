<template>
  <div class="cursor_contain" :class="'cursor_'+type">
    <div class="follow" ref="follow">
      <div class="back"></div>
    </div>
    <div class="cursor" ref="cursor">
      <div class="pointer">
        <a-icon v-if="type != 'blank'" :type="icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  data() {
    return {
      type: 'blank',
      match: {
        'blank': 'blank',
        'experience': 'experiment',
        'search': 'zoom-in',
        'more': 'plus',
        'project':'eye',
        'play':'play-circle',
        'left':'left',
        'right':'right',
        'instagram':'instagram',
        'linkedin':'linkedin',
        'github':'github',
        'send':'check'
      }
    }
  },
  created () {
    window.addEventListener('mousemove', this.cursorMove); 
    window.addEventListener('click', this.clickEvent);
  },
  beforeRouteEnter (to, from, next) {
    window.addEventListener('mousemove', this.cursorMove);
    next()
  },
  destroyed () {
    window.removeEventListener('mousemove', this.cursorMove);
    window.removeEventListener('click', this.clickEvent);
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('mousemove', this.cursorMove);
    this.$cursor.type = "blank"
    next()
  },
  watch: {
    '$cursor.type': function () {
      this.type = this.$cursor.type
    }
  },
  computed: {
    icon() {
      return this.match[this.type] 
    }
  },
  methods: {
    cursorMove (e) {
      let follow = this.$refs.follow
      anime()
      setTimeout(() => {
        follow.style.left = e.x + 'px'
        follow.style.top = e.y + 'px'
      }, 70);
      anime({
        targets: follow,
        left: e.x,
        top: e.y,
        duration: 700,
        easing: 'easeOutExpo'
      })
      let cursor = this.$refs.cursor
      cursor.style.left = e.x + 'px'
      cursor.style.top = e.y + 'px'
    }
  }
}
</script>

<style lang="scss">
  .follow{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;
    margin: -50px;
    z-index: 998;
    mix-blend-mode: exclusion;

    .back{
      transition-duration: 200ms;
      position: relative;
      box-shadow: inset 0 0 0 3px rgba(255,255,255,0.3);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      mix-blend-mode: exclusion;
    }
  }
  .cursor{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    pointer-events: none;
    margin: -50px;
    z-index: 999;

    .pointer{
      transition-duration: 200ms;
      position: relative;
      background-color: rgba(255,255,255,0.7);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      i, svg{
        width: 22px;
        height: 22px;
      }
    }
  }

  .cursor_contain{
    &.cursor_project, &.cursor_play, &.cursor_left, &.cursor_right, &.cursor_send, &.cursor_instagram, &.cursor_linkedin, &.cursor_github, &.cursor_more, &.cursor_search, &.cursor_experience{
      .pointer{
        width: 50px;
        height: 50px;
      }
      .back{
        width: 80px;
        height: 80px;
        box-shadow: inset 0 0 0 70px rgba(255,255,255,0.3);
      }
    }
    &.cursor_send{
      .pointer{
        background-color: rgba(255,117,140,0.7);
      }
      .back{
        box-shadow: inset 0 0 0 70px rgba(255,117,140,0.3);
      }
    }
  }
</style>