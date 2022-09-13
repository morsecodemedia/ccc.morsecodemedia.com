<template>
  <footer>
    <button>Copy URL</button>
    <button>Toggle Simulations</button>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100vw;
  border: 1px solid var(--black);
  z-index: 10;
  padding: 25px 2%;
  background: var(--white);
  button {
    border: 1px solid var(--black);
    border-radius: 5px;
    width: 45%;
    max-width: 350px;
    padding: 15px 10px;
    margin: 0 5px;
  }
}
</style>
