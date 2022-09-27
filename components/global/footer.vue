<template>
  <footer>
    <div class="button-group">
      <button>Share Contrast Check</button>
      <button @click="toggleImpairments">Toggle Vision Impairment Simulations</button>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SiteFooter',
  methods: {
    ...mapMutations('impairments', ['toggleImpairments'])
  }
}
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100vw;
  border: 1px solid var(--black);
  z-index: 10;
  padding: 25px 2%;
  background: var(--white);
  .button-group {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    button {
      width: 100%;
      max-width: 900px;
      border: 1px solid var(--black);
      border-radius: 5px;
      padding: 0.75em 2em;
      margin-bottom: 10px;
    }
  }
}
</style>
