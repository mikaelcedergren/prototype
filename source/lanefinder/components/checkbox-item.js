export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  template: `
              <div class="checkbox-item">
                <input type="checkbox" :id="name" :checked="checked" />
                <label>{{label}}</label>
              </div>
          `,
};
