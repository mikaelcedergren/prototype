export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    extra: {
      type: String,
      default: null,
    },
  },
  template: `
              <div class="status-bar">
                <img src="/shared/images/status-bar-black-left.png" class="dark" />
                <img src="/shared/images/status-bar-black-right.png" class="dark" />
                <img src="/shared/images/status-bar-left.png" class="light" />
                <img src="/shared/images/status-bar-right.png" class="light" />
              </div>
          `,
};
