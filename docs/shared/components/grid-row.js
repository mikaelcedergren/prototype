export default {
  props: {
    fixed: {
      type: Boolean,
      default: null,
    },
    middle: {
      type: Boolean,
      default: null,
    },
    gutterNone: {
      type: Boolean,
      default: null,
    },
    gutterSmall: {
      type: Boolean,
      default: null,
    },
  },
  template: `

<div class="grid-row" :class="{fixed, middle, 'gutter-small': gutterSmall, 'gutter-none': gutterNone}">
<slot></slot>
</div>

`,
};
