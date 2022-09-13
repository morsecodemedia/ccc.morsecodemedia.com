<template>
  <div class="color-container">
    <div class="color-1">
      <label for="color1">Text Color</label>
      <input
        id="color1"
        v-model="txtColor"
        type="color"
        @change="updateTxtColor"
      >
      <label for="hex1">Hex:</label>
      <input
        id="hex1"
        v-model="txtColor"
        type="text"
        @change="updateTxtColor"
      >
    </div>
    <div class="color-2">
      <label for="color2">Background Color</label>
      <input
        id="color2"
        v-model="bgColor"
        type="color"
        @change="updateBgColor"
      >
      <label for="hex2">Hex:</label>
      <input
        id="hex2"
        v-model="bgColor"
        type="text"
        @change="updateBgColor"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      bgColor: '',
      txtColor: ''
    }
  },
  computed: {
    ...mapGetters('colors', ['backgroundColorStore', 'textColorStore'])
  },
  mounted () {
    this.loadBgColor()
    this.loadTxtColor()
  },
  methods: {
    ...mapMutations('colors', ['setBgColorStore', 'setTxtColorStore']),
    loadBgColor () {
      this.bgColor = this.$store.state.colors.backgroundColorStore
    },
    loadTxtColor () {
      this.txtColor = this.$store.state.colors.textColorStore
    },
    updateBgColor () {
      this.setBgColorStore(this.bgColor)
    },
    updateTxtColor () {
      this.setTxtColorStore(this.txtColor)
    }
  }
}
</script>

<style lang="scss">
.color-container {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  .color-1 {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
    #color1 {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  }
  .color-2 {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
    #color2 {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  }
}
</style>
