const mobile = {
  computed: {
    isMobile() {
      return this.$vssHeight > this.$vssWidth 
    }
  },
}

export default mobile