<template>
  <div>
    <Colors />
    <ContrastRatio />
    <WcagTable />
    <!-- <Form /> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Colors from '~/components/colors.vue'
import ContrastRatio from '~/components/contrastRatio.vue'
// import Form from '~/components/form.vue'
import WcagTable from '~/components/wcagTable.vue'

export default {
  name: 'Homepage',
  components: {
    // Form,
    Colors,
    ContrastRatio,
    WcagTable
  },
  computed: {
    ...mapGetters('colors', ['backgroundColorStore', 'textColorStore'])
  },
  mounted () {
    if (process.browser) {
      if (this.getParameterByName('t')) {
        const hex = this.getParameterByName('t')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('tc')) {
        const hex = this.getParameterByName('tc')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('txt')) {
        const hex = this.getParameterByName('txt')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('text')) {
        const hex = this.getParameterByName('text')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('txtColor')) {
        const hex = this.getParameterByName('txtColor')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('textColor')) {
        const hex = this.getParameterByName('textColor')
        const len = hex.length
        this.setTxtColorStore(this.processHex(hex, len))
        this.tq = true
      }
      if (this.getParameterByName('b')) {
        const hex = this.getParameterByName('b')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
      if (this.getParameterByName('bc')) {
        const hex = this.getParameterByName('bc')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
      if (this.getParameterByName('bg')) {
        const hex = this.getParameterByName('bg')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
      if (this.getParameterByName('background')) {
        const hex = this.getParameterByName('background')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
      if (this.getParameterByName('bgColor')) {
        const hex = this.getParameterByName('bgColor')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
      if (this.getParameterByName('backgroundColor')) {
        const hex = this.getParameterByName('backgroundColor')
        const len = hex.length
        this.setBgColorStore(this.processHex(hex, len))
        this.bq = true
      }
    }
  },
  methods: {
    ...mapMutations('colors', ['setBgColorStore', 'setTxtColorStore']),
    getParameterByName (name, url) {
      if (process.browser) {
        if (!url) {
          url = window.location.href
        }
        name = name.replace(/[[\]]/g, '\\$&')
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
        const results = regex.exec(url)
        if (!results) {
          return null
        }
        if (!results[2]) {
          return ''
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
      }
    },
    processHex (hex, length) {
      if (length === 3) {
        hex = hex.split('').map(function (h) {
          return h + h
        }).join('')
        return hex.toUpperCase()
      }
      if (length === 6) {
        return hex.toUpperCase()
      }
      if (length === 8) {
        return hex.toUpperCase()
      }
    },
    upperCaseParameter (value) {
      if (value.length > 0) {
        return value.toUpperCase()
      }
    }
  },
  head () {
    return {
      title: 'Color Contrast Checker | a morsecodemedia tool',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Color Contrast Checker | a morsecodemedia tool' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Color Contrast Checker | a morsecodemedia tool' },
        { hid: 'googlename', itemprop: 'name', content: 'Color Contrast Checker | a morsecodemedia tool' },
        { hid: 'description', name: 'description', content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.' },
        { hid: 'ogdescription', property: 'og:description', content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.' },
        { hid: 'twdescription', name: 'twitter:description', content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.' },
        { hid: 'googledescription', itemprop: 'description', content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.' },
        { hid: 'ogurl', property: 'og:url', content: 'https://ccc.morsecodemedia.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://ccc.morsecodemedia.com' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://ccc.morsecodemedia.com' + this.$route.path }
      ]
    }
  }
}
</script>

<style>

</style>
