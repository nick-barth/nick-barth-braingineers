<template>
  <button
    :class="`bg-button bg-button--${this.variant} ${this.disabled && 'bg-button--disabled'}`"
    :type="type"
    @click="$emit('click')"
    :disabled="this.disabled"
  >
    <span :class="`${this.isLoading && 'bg-button--is-loading'}`">{{ text }}</span>
    <bg-loader :dark="this.variant === 'secondary'" v-if="this.isLoading"></bg-loader>
  </button>
</template>

<style scoped>
@import "./style.css";
</style>

<script>
import BgLoader from "@/components/BgLoader";

export default {
  name: "NxButton",
  components: {
    BgLoader
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: String,
    type: {
      default: "button",
      type: String,
      validator: function(value) {
        return ["reset", "submit", "button"].includes(value);
      }
    },
    variant: {
      default: "primary",
      type: String
    }
  }
};
</script>
