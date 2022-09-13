<template>
  <client-only>
    <focus-trap :active="isOpen" @deactivate="close">
      <div
        v-show="isOpen"
        :id="modalId"
        :ref="modalId"
        aria-hidden="true"
        tabindex="-1"
        class="generic-modal-blur"
        :class="[modalName, { active: isOpen }]"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${modalId}`"
          class="generic-modal"
        >
          <div class="generic-modal-content-container">
            <slot :modalName="modalName" :close="close" />
            <p class="normal-text">
              Normal Text - 16px {{ modalName }}
            </p>
            <p class="normal-text">
              According to Web Content Accessibility Guidelines (WCAG), text and images of text should have a minimum contrast ratio of 4.5:1 (Level AA), while large text should have minimum contrast ratio of 3:1. For enhanced contrast (Level AAA), normal text and large text should have minimum contrast ratio of 7:1 and 4.5:1 respectively.
            </p>
          </div>
          <slot name="button">
            <button aria-label="close" tabindex="0" class="close-x" @click="close" @keyup.enter="close">
              <div class="line" />
            </button>
          </slot>
        </div>
      </div>
    </focus-trap>
  </client-only>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      require: true,
      default: ''
    },
    modalName: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen () {
      return this.$store.getters['modals/isModalOfNameOpen'](this.modalName)
    }
  },
  methods: {
    close () {
      this.$closeModal(this.modalName)
    }
  }
}
</script>

<style lang="scss">
.generic-modal {
  .generic-modal-content-container {
    p {
      &.normal-text {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.2em;
      }
    }
  }
}
</style>
