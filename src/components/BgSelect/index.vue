<template>
  <div>
    <div class="BgSelect__input-container">
      <label v-if="label" :for="name">{{ label }}</label>
      <select
        :id="name"
        class="BgSelect__input"
        @blur="$emit('blur', selected)"
        v-bind="{ placeholder, name }"
        v-model="selected"
        ref="selectInput"
      >
        <option v-bind:key="item.value" v-for="item in options" :value="item.value">{{item.label}}</option>
      </select>
      <div v-if="!selected" class="BgSelect__placeholder">{{placeholder}}</div>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

<script>
export default {
  name: "BgSelect",
  props: {
    placeholder: String,
    value: {
      default: ""
    },
    label: "",
    name: "",
    options: Array
  },
  watch: {
    selected: function() {
      this.$emit("input", this.selected);
      this.$emit("change", this.selected);
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.selectInput.focus();
    }
  }
};
</script>
