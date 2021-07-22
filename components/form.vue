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
                  :style="{backgroundColor: protanomalyBackgroundColor, color: protanomalyTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ protanomalyContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: protanomalyAANormal}">{{ (this.protanomalyAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: protanomalyAALarge}">{{ (this.protanomalyAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: protanomalyAAANormal}">{{ (this.protanomalyAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: protanomalyAAALarge}">{{ (this.protanomalyAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: protanopiaBackgroundColor, color: protanopiaTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ protanopiaContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: protanopiaAANormal}">{{ (this.protanopiaAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: protanopiaAALarge}">{{ (this.protanopiaAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: protanopiaAAANormal}">{{ (this.protanopiaAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: protanopiaAAALarge}">{{ (this.protanopiaAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: deuteranomalyBackgroundColor, color: deuteranomalyTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ deuteranomalyContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: deuteranomalyAANormal}">{{ (this.deuteranomalyAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: deuteranomalyAALarge}">{{ (this.deuteranomalyAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: deuteranomalyAAANormal}">{{ (this.deuteranomalyAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: deuteranomalyAAALarge}">{{ (this.deuteranomalyAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: deuteranopiaBackgroundColor, color: deuteranopiaTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ deuteranopiaContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: deuteranopiaAANormal}">{{ (this.deuteranopiaAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: deuteranopiaAALarge}">{{ (this.deuteranopiaAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: deuteranopiaAAANormal}">{{ (this.deuteranopiaAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: deuteranopiaAAALarge}">{{ (this.deuteranopiaAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: tritanomalyBackgroundColor, color: tritanomalyTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ tritanomalyContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: tritanomalyAANormal}">{{ (this.tritanomalyAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: tritanomalyAALarge}">{{ (this.tritanomalyAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: tritanomalyAAANormal}">{{ (this.tritanomalyAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: tritanomalyAAALarge}">{{ (this.tritanomalyAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: tritanopiaBackgroundColor, color: tritanopiaTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ tritanopiaContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: tritanopiaAANormal}">{{ (this.tritanopiaAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: tritanopiaAALarge}">{{ (this.tritanopiaAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: tritanopiaAAANormal}">{{ (this.tritanopiaAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: tritanopiaAAALarge}">{{ (this.tritanopiaAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: achromatomalyBackgroundColor, color: achromatomalyTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ achromatomalyContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: achromatomalyAANormal}">{{ (this.achromatomalyAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: achromatomalyAALarge}">{{ (this.achromatomalyAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: achromatomalyAAANormal}">{{ (this.achromatomalyAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: achromatomalyAAALarge}">{{ (this.achromatomalyAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
                  :style="{backgroundColor: achromatopsiaBackgroundColor, color: achromatopsiaTextColor}"
                >
                  Contrast Ratio
                </span>
                {{ achromatopsiaContrastRatio }}<span class="outof">/21</span>
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
                    <td :class="{pass: achromatopsiaAANormal}">{{ (this.achromatopsiaAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: achromatopsiaAALarge}">{{ (this.achromatopsiaAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
                  </tr>
                  <tr>
                    <td class="noclass">AAA</td>
                    <td :class="{pass: achromatopsiaAAANormal}">{{ (this.achromatopsiaAAANormal) ? '✓ PASS' : '✗ FAIL' }}</td>
                    <td :class="{pass: achromatopsiaAAALarge}">{{ (this.achromatopsiaAAALarge) ? '✓ PASS' : '✗ FAIL' }}</td>
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
import blinder from 'color-blind'
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
      aaaLarge: false,

      protanomalyBackgroundColor: '',
      protanomalyTextColor: '',
      protanomalyContrastRatio: '',
      protanomalyAANormal: false,
      protanomalyAALarge: false,
      protanomalyAAANormal: false,
      protanomalyAAALarge: false,

      protanopiaBackgroundColor: '',
      protanopiaTextColor: '',
      protanopiaContrastRatio: '',
      protanopiaAANormal: false,
      protanopiaAALarge: false,
      protanopiaAAANormal: false,
      protanopiaAAALarge: false,

      deuteranomalyBackgroundColor: '',
      deuteranomalyTextColor: '',
      deuteranomalyContrastRatio: '',
      deuteranomalyAANormal: false,
      deuteranomalyAALarge: false,
      deuteranomalyAAANormal: false,
      deuteranomalyAAALarge: false,

      deuteranopiaBackgroundColor: '',
      deuteranopiaTextColor: '',
      deuteranopiaContrastRatio: '',
      deuteranopiaAANormal: false,
      deuteranopiaAALarge: false,
      deuteranopiaAAANormal: false,
      deuteranopiaAAALarge: false,

      tritanomalyBackgroundColor: '',
      tritanomalyTextColor: '',
      tritanomalyContrastRatio: '',
      tritanomalyAANormal: false,
      tritanomalyAALarge: false,
      tritanomalyAAANormal: false,
      tritanomalyAAALarge: false,

      tritanopiaBackgroundColor: '',
      tritanopiaTextColor: '',
      tritanopiaContrastRatio: '',
      tritanopiaAANormal: false,
      tritanopiaAALarge: false,
      tritanopiaAAANormal: false,
      tritanopiaAAALarge: false,

      achromatomalyBackgroundColor: '',
      achromatomalyTextColor: '',
      achromatomalyContrastRatio: '',
      achromatomalyAANormal: false,
      achromatomalyAALarge: false,
      achromatomalyAAANormal: false,
      achromatomalyAAALarge: false,

      achromatopsiaBackgroundColor: '',
      achromatopsiaTextColor: '',
      achromatopsiaContrastRatio: '',
      achromatopsiaAANormal: false,
      achromatopsiaAALarge: false,
      achromatopsiaAAANormal: false,
      achromatopsiaAAALarge: false
    }
  },
  watch: {
    backgroundColor () {
      this.checkColorContrast(this.textColor, this.backgroundColor)
      this.checkProtanomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkProtanopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkDeuteranomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkDeuteranopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkTritanomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkTritanopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkAchromatomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkAchromatopsiaColorContrast(this.textColor, this.backgroundColor)
    },
    textColor () {
      this.checkColorContrast(this.textColor, this.backgroundColor)
      this.checkProtanomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkProtanopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkDeuteranomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkDeuteranopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkTritanomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkTritanopiaColorContrast(this.textColor, this.backgroundColor)
      this.checkAchromatomalyColorContrast(this.textColor, this.backgroundColor)
      this.checkAchromatopsiaColorContrast(this.textColor, this.backgroundColor)
    }
  },
  mounted () {
    this.checkColorContrast(this.textColor, this.backgroundColor)
    this.checkProtanomalyColorContrast(this.textColor, this.backgroundColor)
    this.checkProtanopiaColorContrast(this.textColor, this.backgroundColor)
    this.checkDeuteranomalyColorContrast(this.textColor, this.backgroundColor)
    this.checkDeuteranopiaColorContrast(this.textColor, this.backgroundColor)
    this.checkTritanomalyColorContrast(this.textColor, this.backgroundColor)
    this.checkTritanopiaColorContrast(this.textColor, this.backgroundColor)
    this.checkAchromatomalyColorContrast(this.textColor, this.backgroundColor)
    this.checkAchromatopsiaColorContrast(this.textColor, this.backgroundColor)
  },
  methods: {
    checkColorContrast (txt, bg) {
      this.contrastRatio = colord(txt.slice(0, -2)).contrast(bg.slice(0, -2))
      this.aaNormal = this.contrastRatio >= 4.5
      this.aaLarge = this.contrastRatio >= 3
      this.aaaNormal = this.contrastRatio >= 7
      this.aaaLarge = this.contrastRatio >= 4.5
    },
    checkProtanomalyColorContrast (txt, bg) {
      this.protanomalyBackgroundColor = blinder.protanomaly(bg.slice(0, -2))
      this.protanomalyTextColor = blinder.protanomaly(txt.slice(0, -2))
      this.protanomalyContrastRatio = colord(this.protanomalyTextColor).contrast(this.protanomalyBackgroundColor)
      this.protanomalyAANormal = this.protanomalyContrastRatio >= 4.5
      this.protanomalyAALarge = this.protanomalyContrastRatio >= 3
      this.protanomalyAAANormal = this.protanomalyContrastRatio >= 7
      this.protanomalyAAALarge = this.protanomalyContrastRatio >= 4.5
    },
    checkProtanopiaColorContrast (txt, bg) {
      this.protanopiaBackgroundColor = blinder.protanopia(bg.slice(0, -2))
      this.protanopiaTextColor = blinder.protanopia(txt.slice(0, -2))
      this.protanopiaContrastRatio = colord(this.protanopiaTextColor).contrast(this.protanopiaBackgroundColor)
      this.protanopiaAANormal = this.protanopiaContrastRatio >= 4.5
      this.protanopiaAALarge = this.protanopiaContrastRatio >= 3
      this.protanopiaAAANormal = this.protanopiaContrastRatio >= 7
      this.protanopiaAAALarge = this.protanopiaContrastRatio >= 4.5
    },
    checkDeuteranomalyColorContrast (txt, bg) {
      this.deuteranomalyBackgroundColor = blinder.deuteranomaly(bg.slice(0, -2))
      this.deuteranomalyTextColor = blinder.deuteranomaly(txt.slice(0, -2))
      this.deuteranomalyContrastRatio = colord(this.deuteranomalyTextColor).contrast(this.deuteranomalyBackgroundColor)
      this.deuteranomalyAANormal = this.deuteranomalyContrastRatio >= 4.5
      this.deuteranomalyAALarge = this.deuteranomalyContrastRatio >= 3
      this.deuteranomalyAAANormal = this.deuteranomalyContrastRatio >= 7
      this.deuteranomalyAAALarge = this.deuteranomalyContrastRatio >= 4.5
    },
    checkDeuteranopiaColorContrast (txt, bg) {
      this.deuteranopiaBackgroundColor = blinder.deuteranopia(bg.slice(0, -2))
      this.deuteranopiaTextColor = blinder.deuteranopia(txt.slice(0, -2))
      this.deuteranopiaContrastRatio = colord(this.deuteranopiaTextColor).contrast(this.deuteranopiaBackgroundColor)
      this.deuteranopiaAANormal = this.deuteranopiaContrastRatio >= 4.5
      this.deuteranopiaAALarge = this.deuteranopiaContrastRatio >= 3
      this.deuteranopiaAAANormal = this.deuteranopiaContrastRatio >= 7
      this.deuteranopiaAAALarge = this.deuteranopiaContrastRatio >= 4.5
    },
    checkTritanomalyColorContrast (txt, bg) {
      this.tritanomalyBackgroundColor = blinder.tritanomaly(bg.slice(0, -2))
      this.tritanomalyTextColor = blinder.tritanomaly(txt.slice(0, -2))
      this.tritanomalyContrastRatio = colord(this.tritanomalyTextColor).contrast(this.tritanomalyBackgroundColor)
      this.tritanomalyAANormal = this.tritanomalyContrastRatio >= 4.5
      this.tritanomalyAALarge = this.tritanomalyContrastRatio >= 3
      this.tritanomalyAAANormal = this.tritanomalyContrastRatio >= 7
      this.tritanomalyAAALarge = this.tritanomalyContrastRatio >= 4.5
    },
    checkTritanopiaColorContrast (txt, bg) {
      this.tritanopiaBackgroundColor = blinder.tritanopia(bg.slice(0, -2))
      this.tritanopiaTextColor = blinder.tritanopia(txt.slice(0, -2))
      this.tritanopiaContrastRatio = colord(this.tritanopiaTextColor).contrast(this.tritanopiaBackgroundColor)
      this.tritanopiaAANormal = this.tritanopiaContrastRatio >= 4.5
      this.tritanopiaAALarge = this.tritanopiaContrastRatio >= 3
      this.tritanopiaAAANormal = this.tritanopiaContrastRatio >= 7
      this.tritanopiaAAALarge = this.tritanopiaContrastRatio >= 4.5
    },
    checkAchromatomalyColorContrast (txt, bg) {
      this.achromatomalyBackgroundColor = blinder.achromatomaly(bg.slice(0, -2))
      this.achromatomalyTextColor = blinder.achromatomaly(txt.slice(0, -2))
      this.achromatomalyContrastRatio = colord(this.achromatomalyTextColor).contrast(this.achromatomalyBackgroundColor)
      this.achromatomalyAANormal = this.achromatomalyContrastRatio >= 4.5
      this.achromatomalyAALarge = this.achromatomalyContrastRatio >= 3
      this.achromatomalyAAANormal = this.achromatomalyContrastRatio >= 7
      this.achromatomalyAAALarge = this.achromatomalyContrastRatio >= 4.5
    },
    checkAchromatopsiaColorContrast (txt, bg) {
      this.achromatopsiaBackgroundColor = blinder.achromatopsia(bg.slice(0, -2))
      this.achromatopsiaTextColor = blinder.achromatopsia(txt.slice(0, -2))
      this.achromatopsiaContrastRatio = colord(this.achromatopsiaTextColor).contrast(this.achromatopsiaBackgroundColor)
      this.achromatopsiaAANormal = this.achromatopsiaContrastRatio >= 4.5
      this.achromatopsiaAALarge = this.achromatopsiaContrastRatio >= 3
      this.achromatopsiaAAANormal = this.achromatopsiaContrastRatio >= 7
      this.achromatopsiaAAALarge = this.achromatopsiaContrastRatio >= 4.5
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
