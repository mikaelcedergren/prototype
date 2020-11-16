export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    paragraph: {
      type: String,
      default: null,
    },
    secondParagraph: {
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
    layoutRight: {
      type: Boolean,
      default: null,
    },
    sponsored: {
      type: Boolean,
      default: null,
    },
    first: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    hasSlotData() {
      return this.$slots.default;
    },
  },
  template: `
              <div>
                <div class="list-item" :class="{'layout-right': layoutRight, first, unread}">
                  <tag-item accent v-if="sponsored">Urgently hiring</tag-item>
                  <h3><div v-if="unread" class="unread-marker"></div>{{title}}</h3>
                  <div v-if="subTitle" class="list-item-sub-title">{{subTitle}}</div>
                  <p v-if="paragraph">{{paragraph}}</p>
                  <p v-if="secondParagraph">{{secondParagraph}}</p>
                  <div v-if="hasSlotData || extra" class="list-item-extra">
                    <slot></slot>
                    <span>{{extra}}</span>
                  </div>
                </div>
                <hr :class="{'depth' : !layoutRight}"/>
              </div>
          `,
};
