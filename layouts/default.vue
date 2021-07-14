<template>
  <div >
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <nuxt
      id="main"
      ref="main"
      aria-label="main"
      role="main"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
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
