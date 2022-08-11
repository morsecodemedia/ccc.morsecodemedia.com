<template>
  <div class="color-container">
    <div class="color-1">
      <p>Text Color</p>
      <input
        id="color1"
        v-model="textColor"
        type="color"
      >
      <input
        id="hex1"
        v-model="textColor"
        type="text"
      >
    </div>
    <div class="color-2">
      <p>Background Color</p>
      <input
        id="color2"
        v-model="backgroundColor"
        type="color"
      >
      <input
        id="hex2"
        v-model="backgroundColor"
        type="text"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Colors',
  data () {
    return {
      backgroundColor: '',
      textColor: ''
    }
  },
  mounted () {
    if (process.browser) {
      if (this.getParameterByName('t')) {
        const hex = this.getParameterByName('t')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('tc')) {
        const hex = this.getParameterByName('tc')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('txt')) {
        const hex = this.getParameterByName('txt')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('text')) {
        const hex = this.getParameterByName('text')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('txtColor')) {
        const hex = this.getParameterByName('txtColor')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('textColor')) {
        const hex = this.getParameterByName('textColor')
        const len = hex.length
        this.textColor = this.processHex(hex, len)
        this.tq = true
      }
      if (this.getParameterByName('b')) {
        const hex = this.getParameterByName('b')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (this.getParameterByName('bc')) {
        const hex = this.getParameterByName('bc')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (this.getParameterByName('bg')) {
        const hex = this.getParameterByName('bg')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (this.getParameterByName('background')) {
        const hex = this.getParameterByName('background')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (this.getParameterByName('bgColor')) {
        const hex = this.getParameterByName('bgColor')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (this.getParameterByName('backgroundColor')) {
        const hex = this.getParameterByName('backgroundColor')
        const len = hex.length
        this.backgroundColor = this.processHex(hex, len)
        this.bq = true
      }
      if (!this.tq) {
        this.textColor = '#FCF49F'
      }
      if (!this.bq) {
        this.backgroundColor = '#985895'
      }
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss">
.color-container {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  .color-1 {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
    #color1 {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  }
  .color-2 {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
    #color2 {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  }
}
</style>
