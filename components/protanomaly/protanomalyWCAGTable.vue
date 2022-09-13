<template>
  <div class="wcag-container">
    <div class="normal">
      <p>
        Normal Text
      </p>
      <table>
        <tr>
          <th>AA 4.5:1</th>
          <td :class="{ pass: protanomalyAANormal }">
            {{ (protanomalyAANormal) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
        <tr>
          <th>AAA 7:1</th>
          <td :class="{ pass: protanomalyAAANormal }">
            {{ (protanomalyAAANormal) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
      </table>
    </div>
    <div class="large">
      <p>
        Large text
      </p>
      <table>
        <tr>
          <th>AA 3:1</th>
          <td :class="{ pass: protanomalyAALarge }">
            {{ (protanomalyAALarge) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
        <tr>
          <th>AAA 4.5:1</th>
          <td :class="{ pass: protanomalyAAALarge }">
            {{ (protanomalyAAALarge) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import blinder from 'color-blind'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

export default {
  data () {
    return {
      protanomalyContrastRatio: '',
      protanomalyAANormal: false,
      protanomalyAALarge: false,
      protanomalyAAANormal: false,
      protanomalyAAALarge: false
    }
  },
  computed: {
    ...mapGetters('colors', ['backgroundColorStore', 'textColorStore']),
    protanomalyBackgroundColor () {
      return this.$store.state.colors.backgroundColorStore
    },
    protanomalyTextColor () {
      return this.$store.state.colors.textColorStore
    }
  },
  watch: {
    protanomalyBackgroundColor () {
      this.checkColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    },
    txtColor () {
      this.checkColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    }
  },
  mounted () {
    this.loadBgColor()
    this.loadTxtColor()
  },
  methods: {
    ...mapMutations('colors', ['setBgColorStore', 'setTxtColorStore']),
    checkColorContrast (txt, bg) {
      this.protanomalyBackgroundColor = blinder.protanomaly(bg.slice(0, -2))
      this.protanomalyTextColor = blinder.protanomaly(txt.slice(0, -2))
      this.protanomalyContrastRatio = colord(this.protanomalyTextColor).contrast(this.protanomalyBackgroundColor)
      this.protanomalyAANormal = this.protanomalyContrastRatio >= 4.5
      this.protanomalyAALarge = this.protanomalyContrastRatio >= 3
      this.protanomalyAAANormal = this.protanomalyContrastRatio >= 7
      this.protanomalyAAALarge = this.protanomalyContrastRatio >= 4.5
    },
    loadBgColor () {
      this.protanomalyBackgroundColor = this.$store.state.colors.backgroundColorStore
      this.checkColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    },
    loadTxtColor () {
      this.protanomalyTextColor = this.$store.state.colors.textColorStore
      this.checkColorContrast(this.protanomalyTextColor, this.protanomalyBackgroundColor)
    }
  }
}
</script>
