

  app.component("user-list", {
    props: {
      title: {
        type: String,
        default: null,
      },
      primary: {
        type: Boolean,
        default: false,
      },
    },
    template: `
              <div :class="{ 'this-is-primary': primary, primary}">
                  <div>{{title}}</div>
                  <div v-if="primary">This is primary</div>
              </div>
          `,
  });