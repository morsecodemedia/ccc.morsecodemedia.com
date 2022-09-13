<template>
  <div class="wcag-container">
    <div class="normal">
      <button @click="$toggleModal(modalNormalText)">
        Normal Text
        <span>i</span>
      </button>
      <table>
        <tr>
          <th>AA 4.5:1</th>
          <td :class="{pass: aaNormal}">
            {{ (aaNormal) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
        <tr>
          <th>AAA 7:1</th>
          <td :class="{pass: aaaNormal}">
            {{ (aaaNormal) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
      </table>
    </div>
    <div class="large">
      <button @click="$toggleModal(modalLargeText)">
        Large text
        <span>i</span>
      </button>
      <table>
        <tr>
          <th>AA 3:1</th>
          <td :class="{pass: aaLarge}">
            {{ (aaLarge) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
        <tr>
          <th>AAA 4.5:1</th>
          <td :class="{pass: aaaLarge}">
            {{ (aaaLarge) ? '✓ PASS' : '✗ FAIL' }}
          </td>
        </tr>
      </table>
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
      aaNormal: false,
      aaLarge: false,
      aaaNormal: false,
      aaaLarge: false,
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
      this.aaNormal = this.contrastRatio >= 4.5
      this.aaLarge = this.contrastRatio >= 3
      this.aaaNormal = this.contrastRatio >= 7
      this.aaaLarge = this.contrastRatio >= 4.5
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
