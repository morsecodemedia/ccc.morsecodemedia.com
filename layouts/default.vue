<template>
  <div>
    <SiteHeader aria-label="site header" />
    <nuxt id="main" ref="main" aria-label="main" role="main" />
    <SiteFooter aria-label="site footer" />
    <ModalNormalText :modal-name="NormalText" :modal-id="NormalText" />
    <ModalLargeText :modal-name="LargeText" :modal-id="LargeText" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalNormalText from '../components/modals/modalNormalText.vue'
import ModalLargeText from '../components/modals/modalLargeText.vue'
import SiteHeader from '../components/global/header.vue'
import SiteFooter from '../components/global/footer.vue'

let bodyTag = null

export default {
  name: 'App',
  components: {
    ModalNormalText,
    ModalLargeText,
    SiteHeader,
    SiteFooter
  },
  computed: {
    ...mapGetters('modals', ['isModalOpen'])
  },
  watch: {
    isModalOpen (val) {
      if (val) {
        bodyTag.classList.add('killscroll')
      } else {
        bodyTag.classList.remove('killscroll')
      }
    }
  },
  mounted () {
    bodyTag = document.getElementsByTagName('body')[0]
    bodyTag.classList.remove('killscroll')
  },
  head () {
    return {
      title: 'Color Contrast Checker | a morsecodemedia tool',
      meta: [
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: 'Color Contrast Checker | a morsecodemedia tool'
        },
        {
          hid: 'twtitle',
          name: 'twitter:title',
          content: 'Color Contrast Checker | a morsecodemedia tool'
        },
        {
          hid: 'googlename',
          itemprop: 'name',
          content: 'Color Contrast Checker | a morsecodemedia tool'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.'
        },
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.'
        },
        {
          hid: 'twdescription',
          name: 'twitter:description',
          content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.'
        },
        {
          hid: 'googledescription',
          itemprop: 'description',
          content: 'An accessibility checker tool for validating the color contrast based on WCAG 2.0 and WCAG 2.1 standards.'
        },
        {
          hid: 'ogurl',
          property: 'og:url',
          content: 'https://ccc.morsecodemedia.com' + this.$route.path
        },
        {
          hid: 'twsite',
          name: 'twitter:site',
          content: 'https://ccc.morsecodemedia.com' + this.$route.path
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://ccc.morsecodemedia.com' + this.$route.path
        }
      ]
    }
  }
}
</script>
