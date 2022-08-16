<template>
  <div>
    <Colors />
    <ContrastRatio />
    <WcagTable />
    <Form />
  </div>
</template>

<script>
import Colors from '~/components/colors.vue'
import ContrastRatio from '~/components/contrastRatio.vue'
import Form from '~/components/form.vue'
import WcagTable from '~/components/wcagTable.vue'
export default {
  name: 'Homepage',
  components: {
    Form,
    Colors,
    ContrastRatio,
    WcagTable
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
