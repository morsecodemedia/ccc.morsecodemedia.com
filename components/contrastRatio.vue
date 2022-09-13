<template>
  <div class="contrast-container">
    <h2>Regular Vision (Trichromatic)</h2>
    <p>Can distinguish all three primary color, little to no blurriness</p>
    <div :style="{backgroundColor: bgColor, color: txtColor}">
      <p class="contrast-ratio">
        {{ contrastRatio }}:1
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

export default {
  data () {
    return {
      contrastRatio: ''
    }
  },
  computed: {
    ...mapGetters('colors', ['backgroundColorStore', 'textColorStore']),
    bgColor () {
      return this.$store.state.colors.backgroundColorStore
    },
    txtColor () {
      return this.$store.state.colors.textColorStore
    }
  },
  watch: {
    bgColor () {
      this.checkColorContrast(this.txtColor, this.bgColor)
    },
    txtColor () {
      this.checkColorContrast(this.txtColor, this.bgColor)
    }
  },
  mounted () {
    this.loadBgColor()
    this.loadTxtColor()
  },
  methods: {
    ...mapMutations('colors', ['setBgColorStore', 'setTxtColorStore']),
    checkColorContrast (txt, bg) {
      this.contrastRatio = colord(txt).contrast(bg)
    },
    loadBgColor () {
      this.bgColor = this.$store.state.colors.backgroundColorStore
      this.checkColorContrast(this.txtColor, this.bgColor)
    },
    loadTxtColor () {
      this.txtColor = this.$store.state.colors.textColorStore
      this.checkColorContrast(this.txtColor, this.bgColor)
    }
  }
}
</script>
