<template>
  <div
    class="contrast-container"
    :style="{backgroundColor: backgroundColor, color: textColor}"
  >
    <p class="contrast-ratio">
      {{ contrastRatio }}:1
    </p>
  </div>
</template>

<script>
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

export default {
  name: 'ContrastRatio',
  data () {
    return {
      textColor: '',
      backgroundColor: '',
      contrastRatio: '',
      aaNormal: false,
      aaLarge: false,
      aaaNormal: false,
      aaaLarge: false
    }
  },
  mounted () {
    this.textColor = '#FCF49F'
    this.backgroundColor = '#985895'
    this.checkColorContrast(this.textColor, this.backgroundColor)
  },
  methods: {
    checkColorContrast (txt, bg) {
      this.contrastRatio = colord(txt).contrast(bg)
      this.aaNormal = this.contrastRatio >= 4.5
      this.aaLarge = this.contrastRatio >= 3
      this.aaaNormal = this.contrastRatio >= 7
      this.aaaLarge = this.contrastRatio >= 4.5
    }
  }
}
</script>

<style lang="scss">
.contrast-container {
  text-align: center;
  padding: 0;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .contrast-ratio {
    font-size: 60px;
    line-height: 1em;
    font-weight: bold;
  }
}
</style>
