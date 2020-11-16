export default {
  props: {
    primary: {
      type: Boolean,
      default: null,
    },
  },
  template: `
              <div class="tag"><slot></slot></div>
          `,
};
