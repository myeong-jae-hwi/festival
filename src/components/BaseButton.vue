<template>
  <button :class="buttonClass" :style="buttonStyle" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      return {
        btn: true,
        [`btn-${this.variant}`]: !this.isHexColor,
        "btn-disabled": this.disabled,
      };
    },
    buttonStyle() {
      return this.isHexColor ? { backgroundColor: this.color } : {};
    },
    isHexColor() {
      return /^#([0-9A-F]{3}){1,2}$/i.test(this.color);
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style scoped>
button {
  font-size: 1rem;
  /* padding: 0.5rem 1rem; */
  width: 4rem;
  inline-size: 4rem;
  height: 4rem;
  block-size: 4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.btn-primary {
  background-color: rgb(245, 250, 255);
  color: rgb(121, 121, 121);
}

.btn-secondary {
  background-color: rgb(200, 200, 200);
  color: rgb(255, 255, 255);
}

.btn-disabled {
  background-color: grey;
  color: lightgrey;
  cursor: not-allowed;
}
</style>
