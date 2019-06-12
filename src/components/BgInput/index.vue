<template>
  <div class="bg-input">
    <label v-if="label" :for="name">{{ label }}</label>
    <div class="bg-input__input-container">
      <textarea
        v-if="tag === 'textarea'"
        class="bg-input__input"
        v-bind="{ name, id: name, placeholder }"
        v-model="input"
        @blur="$emit('blur', input)"
        ref="input"
        :rows="rows"
      />
      <input
        v-else
        class="bg-input__input"
        v-bind="{ name, id: name, placeholder, type }"
        v-model="input"
        @blur="$emit('blur', input)"
        ref="input"
      >
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

<script>
export default {
  name: "BgInput",
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: "TextInput"
    },
    label: {
      type: String,
      default: "Search"
    }
  },
  watch: {
    input: function() {
      this.$emit("input", this.input);
      this.$emit("change", this.input);
    }
  },
  data() {
    return {
      input: this.value
    };
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  }
};
</script>
