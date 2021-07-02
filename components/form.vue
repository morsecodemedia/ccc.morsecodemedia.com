<template>
  <v-app>
    <v-card
      class="mx-auto"
      flat
      max-width="1000"
    >
      <v-container fluid>
        <h1>Color Contrast Checker</h1>
        <v-row>
          <v-col
            cols="6"
          >
            <v-card
              color="transparent"
            >
              <v-card-title>Background Color</v-card-title>
              <v-card-text>
                <v-row justify="center">
                  <v-color-picker
                    v-model="backgroundColor"
                    mode="hexa"
                    flat
                    hide-mode-switch
                  />
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="6"
          >
            <v-card
              color="transparent"
            >
              <v-card-title>Text Color</v-card-title>
              <v-card-text>
                <v-row justify="center">
                  <v-color-picker
                    v-model="textColor"
                    mode="hexa"
                    flat
                    hide-mode-switch
                  />
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
          >
            <v-card
              color="transparent"
            >
              <v-card-title>Contrast Ratio</v-card-title>
              <p class="contrast-ratio">{{ contrastRatio }}<span class="outof">/21</span></p>

              <v-simple-table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Normal Text</th>
                    <th>Large Text</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="noclass">AA</td>
                    <td :class="{pass: aaNormal}">{{ (this.aaNormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: aaLarge}">{{ (this.aaLarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: aaaNormal}">{{ (this.aaaNormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: aaaLarge}">{{ (this.aaaLarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-card
            :style="{backgroundColor: backgroundColor, color: textColor}"
            class="preview"
          >
            <p class="large-text">Large Text - 24px</p>
            <p class="large-text">Contrast ratio is a measure of the difference in perceived brightness between two colors. The higher the ratio, the better the contrast.</p>

            <p class="normal-text">Normal Text - 16px</p>
            <p class="normal-text">According to Web Content Accessibility Guidelines (WCAG) 2.0, text and images of text should have a minimum contrast ratio of 4.5:1 (Level AA), while large text should have minimum contrast ratio of 3:1. For enhanced contrast (Level AAA), normal text and large text should have minimum contrast ratio of 7:1 and 4.5:1 respectively.</p>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
extend([a11yPlugin])

export default {
  name: 'Form',
  data () {
    return {
      backgroundColor: '#985895FF',
      textColor: '#FCF49FFF',
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
  watch: {
    backgroundColor () {
      this.checkColorContrast(this.textColor, this.backgroundColor)
    },
    textColor () {
      this.checkColorContrast(this.textColor, this.backgroundColor)
    }
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

<style>
.preview {
  width: 100%;
  max-width: 1000px;
  padding: 15px 15px 0 15px;
}
.large-text {
  font-size: 24px;
  line-height: 1.2em;
}
.normal-text {
  font-size: 16px;
  line-height: 1.2em;
}
.contrast-ratio {
  font-size: 24px;
  padding-left: 15px;
}
.outof {
  font-size: 16px;
}
td {
  color: red;
}
td.noclass {
  color: unset;
}
.pass {
  color: green;
}
</style>
