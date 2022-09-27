<template>
  <header>
    <h1>Color Contrast Checker</h1>
    <p>
      Contrast ratio is a measure of the difference in perceived brightness
      between two colors. The higher the ratio, the better the contrast.
    </p>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto 25px;
  padding: 2% 2% 0 2%;
  max-width: 1200px;
}
</style>
