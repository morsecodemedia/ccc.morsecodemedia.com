<template>
  <v-app>
    <v-card
      class="mx-auto"
      flat
      max-width="1000"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
          >
            <v-card
              color="transparent"
            >
              <v-subheader>Background Color</v-subheader>
              <v-card-text>
                <v-row>
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
              <v-subheader>Text Color</v-subheader>
              <v-card-text>
                <v-row>
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
              flex="12"
              color="transparent"
            >
              <v-subheader>Font Size</v-subheader>
              <v-card-text>
                <v-row>
                  <v-col cols="8">
                    <v-slider
                      v-model="fontSize"
                      class="align-center"
                      :max="92"
                      :min="12"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="fontSize"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width:50px; display: inline-block;"
                    />px
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-card
            :style="{backgroundColor: backgroundColor, color: textColor, fontSize: fontSize + 'px', lineHeight: '1.2em',}"
            class="preview"
          >
            <p>
              The quick brown fox jumps over the lazy dog.
            </p>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      backgroundColor: '',
      textColor: '',
      fontSize: '16'
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
</style>
