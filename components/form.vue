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
            cols="6"
          >
            <!-- Regular Vision -->
            <v-card
              color="transparent"
            >
              <v-card-title>Regular Vision (Trichromatic)</v-card-title>
              <v-card-subtitle>Can distinguish all three primary color, little to no blurriness</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Protanomaly -->
            <v-card
              color="transparent"
            >
              <v-card-title>Protanomaly</v-card-title>
              <v-card-subtitle>Trouble distinguishing reds</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Protanopia -->
            <v-card
              color="transparent"
            >
              <v-card-title>Protanopia</v-card-title>
              <v-card-subtitle>Red blind - Can’t see reds at all</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Deuteranomaly -->
            <v-card
              color="transparent"
            >
              <v-card-title>Deuteranomaly</v-card-title>
              <v-card-subtitle>Trouble distinguishing greens</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Deuteranopia -->
            <v-card
              color="transparent"
            >
              <v-card-title>Deuteranopia</v-card-title>
              <v-card-subtitle>Green blind - Can’t see greens at all</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Tritanomaly -->
            <v-card
              color="transparent"
            >
              <v-card-title>Tritanomaly</v-card-title>
              <v-card-subtitle>Trouble distinguishing blues</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Tritanopia -->
            <v-card
              color="transparent"
            >
              <v-card-title>Tritanopia</v-card-title>
              <v-card-subtitle>Blue blind - Can’t see blues at all</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Achromatomaly -->
            <v-card
              color="transparent"
            >
              <v-card-title>Achromatomaly</v-card-title>
              <v-card-subtitle>Partial color blindness, sees the absence of most colors</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Achromatopsia -->
            <v-card
              color="transparent"
            >
              <v-card-title>Achromatopsia</v-card-title>
              <v-card-subtitle>Complete color blindness, can only see shades</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Cataracts -->
            <v-card
              color="transparent"
            >
              <v-card-title>Cataracts</v-card-title>
              <v-card-subtitle>Clouding of the lens in the eye that affects vision</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Glaucoma -->
            <v-card
              color="transparent"
            >
              <v-card-title>Glaucoma</v-card-title>
              <v-card-subtitle>Slight vision loss</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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

            <!-- Low Vision -->
            <v-card
              color="transparent"
            >
              <v-card-title>Low Vision</v-card-title>
              <v-card-subtitle>Decreased and/or blurry vision (not fixable by usual means such as glasses)</v-card-subtitle>
              <p class="contrast-ratio">
                <span
                  class="color-preview"
                  :style="{backgroundColor: backgroundColor, color: textColor}"
                >
                  Contrast Ratio
                </span>
                {{ contrastRatio }}<span class="outof">/21</span>
              </p>

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
h1 {
  margin-bottom: 25px;
}
.v-card {
  margin-bottom: 15px;
}
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

.contrast-ratio .color-preview {
  display: inline-block;
  padding: 15px;
  border-radius: 5px;
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
