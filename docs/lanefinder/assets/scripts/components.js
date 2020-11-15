const app = Vue.createApp({});

app.component("list-heading", {
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
              <div class="list-heading">
                  <h4>{{title}}</h4>
                  <div v-if="extra">{{extra}}</div>
              </div>
          `,
});

app.component("status-bar", {
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
});

app.component("list-item", {
  props: {
    title: {
      type: String,
      default: null,
    },
    paragraph: {
      type: String,
      default: null,
    },
    extra: {
      type: String,
      default: null,
    },
    unread: {
      type: Boolean,
      default: null,
    },
    right: {
      type: Boolean,
      default: null,
    },
    sponsored: {
      type: Boolean,
      default: null,
    },
  },
  template: `
              <div>
                <div class="list-item" :class="{'layout-right': right}">
                  <tag-item accent v-if="sponsored">Urgently hiring</tag-item>
                  <h3><div v-if="unread" class="unread-marker"></div>{{title}}</h3>
                  <p v-if="paragraph">{{paragraph}}</p>
                  <div class="list-item-extra">
                  <slot></slot>
                  <span>{{extra}}</span>
                  </div>
                </div>
                <hr :class="{'depth' : !right}"/>
              </div>
          `,
});

app.component("tag-item", {
  props: {
    primary: {
      type: Boolean,
      default: null,
    },
  },
  template: `
              <div class="tag-item"><slot></slot></div>
          `,
});

app.component("checkbox-item", {
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
});

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

app.mount("#app");
