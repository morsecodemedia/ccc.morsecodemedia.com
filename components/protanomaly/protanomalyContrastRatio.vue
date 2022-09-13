<template>
  <div class="contrast-container">
    <h2>Protanomaly</h2>
    <p>Trouble distinguishing reds</p>
    <div :style="{ backgroundColor: protanomalyBackgroundColor, color: protanomalyTextColor }">
      <p class="contrast-ratio">
        {{ protanomalyContrastRatio }}:1
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import blinder from 'color-blind'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

export default {
  data () {
    return {
      protanomalyBackgroundColor: '',
      protanomalyTextColor: '',
      protanomalyContrastRatio: ''
    }
  },
  computed: {
    ...mapGetters('colors', ['backgroundColorStore', 'textColorStore'])
  },
  watch: {
    protanomalyBackgroundColor () {
      this.checkProtanomalyColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    },
    protanomalyTextColor () {
      this.checkProtanomalyColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    }
  },
  mounted () {
    this.loadBgColor()
    this.loadTxtColor()
  },
  methods: {
    checkProtanomalyColorContrast (txt, bg) {
      // this.protanomalyBackgroundColor = blinder.protanomaly(bg.slice(0, -2))
      // this.protanomalyTextColor = blinder.protanomaly(txt.slice(0, -2))
      this.protanomalyContrastRatio = colord(this.protanomalyTextColor).contrast(this.protanomalyBackgroundColor)
    },
    loadBgColor () {
      this.protanomalyBackgroundColor = blinder.protanomaly(this.$store.state.colors.backgroundColorStore.slice(0, -2))
      this.checkProtanomalyColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    },
    loadTxtColor () {
      this.protanomalyTextColor = blinder.protanomaly(this.$store.state.colors.textColorStore.slice(0, -2))
      this.checkProtanomalyColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    }
  }
}
</script>
