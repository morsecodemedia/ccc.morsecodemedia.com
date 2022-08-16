<template>
  <div class="wcag-container">
    <div class="normal">
      <button>
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
      <button>
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
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

extend([a11yPlugin])

export default {
  name: 'WCAGTable',
  data () {
    return {
      backgroundColor: '',
      textColor: '',
      contrastRatio: '',
      aaNormal: false,
      aaLarge: false,
      aaaNormal: false,
      aaaLarge: false
    }
  },
  mounted () {
    this.checkColorContrast(this.textColor, this.backgroundColor)
  },
  methods: {
    checkColorContrast (txt, bg) {
      this.contrastRatio = colord(txt).contrast(bg)
      this.aaNormal = this.contrastRatio >= 4.5
      this.aaLarge = this.contrastRatio >= 3
      this.aaaNormal = this.contrastRatio >= 7
      this.aaaLarge = this.contrastRatio >= 4.5
    }
  }
}
</script>

<style lang="scss">
.wcag-container {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  .normal {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
  }
  .large {
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 0 2% 2%;
  }
  table {
    text-align: left;
    cellpadding: 0px;
    cellspacing: 0px;
    tr {
      &:nth-of-type(odd) {
        th, td {
          border-bottom: 1px solid lightgrey;
        }
      }
    }
    td {
      color: red;
      &.noclass {
        color: unset;
      }
      &.pass {
        color: green;
      }
    }
  }
  button {
    all: unset;
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span {
      margin-left: 20px;
      text-align: center;
      height: 20px;
      width: 20px;
      border: 1px solid black;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:focus,
    &:hover {
      cursor: pointer;
      outline: 1px dashed black;
    }
  }
}
</style>
