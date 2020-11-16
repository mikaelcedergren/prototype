export default {
  props: {
    shrink: {
      type: Boolean,
      default: null,
    },
  },
  template: `

<div class="grid-cell" :class="{shrink}">
<slot></slot>
</div>

`,
};
