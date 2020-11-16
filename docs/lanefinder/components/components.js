(function () {
  'use strict';

  var GridRow = {
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

  var GridCell = {
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

  var ListHeading = {
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
  };

  var ListItem = {
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

  var StatusBar = {
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
                <img src="/shared/assets/images/status-bar-black-left.png" class="dark" />
                <img src="/shared/assets/images/status-bar-black-right.png" class="dark" />
                <img src="/shared/assets/images/status-bar-left.png" class="light" />
                <img src="/shared/assets/images/status-bar-right.png" class="light" />
              </div>
          `,
  };

  var CarrierListItem = {
    props: {
      title: {
        type: String,
        default: null,
      },
      size: {
        type: String,
        default: null,
      },
      distance: {
        type: String,
        default: null,
      },
    },
    template: `
  
  <div class="carrier-list-item">
    <grid-row fixed gutter-small>
      <grid-cell shrink>
        <input type="checkbox" onClick="showSendButton();" />
      </grid-cell>
      <grid-cell>
        <grid-row gutter-none>
          <grid-cell>
            {{title}}
          </grid-cell>
          <grid-cell class="shrink align-right color-discreet">
            {{distance}}
          </grid-cell>
        </grid-row>
        <div class="color-discreet">{{size}}</div>
      </grid-cell>
    </grid-row>
  </div>
  
  `,
  };

  var TagItem = {
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

  var HeaderBackdrop = {
    props: {},
    template: `
              <div class="header-backdrop"></div>
          `,
  };

  var ViewHeader = {
    props: {},
    template: `
              <div class="view-header"><slot></slot></div>
          `,
  };

  var MainView = {
    props: {},
    template: `
              <div class="main-view"><slot></slot></div>
          `,
  };

  var BoxBlock = {
    props: {},
    template: `
              <div class="box"><slot></slot></div>
          `,
  };

  var TooltipOnce = {
    props: {},
    template: `
              <div class="tooltip-once"><slot></slot></div>
          `,
  };

  var FormBlock = {
    props: {},
    template: `
              <div class="form-block"><slot></slot></div>
          `,
  };

  var ButtonContainer = {
    props: {},
    template: `
              <div class="button-container"><slot></slot></div>
          `,
  };

  var ViewContent = {
    props: {},
    template: `
              <div class="view-content"><slot></slot></div>
          `,
  };

  var NavigationBar = {
    props: {},
    template: `
              <div class="navigation-bar"><slot></slot></div>
          `,
  };

  var MobileTabs = {
    props: {},
    template: `
<div class="mobile-tabs">
  <a href="index.html" class="<!-- $tab-item-1? -->">
    <i class="material-icons">search</i>
    <div>Jobs</div>
  </a>

  <a href="carriers.html" class="<!-- $tab-item-2? -->">
    <i class="material-icons">apartment</i>
    <div>Carriers</div>
  </a>

  <a href="saved.html" class="<!-- $tab-item-3? -->">
    <i class="material-icons">favorite</i>
    <div>Saved</div>
  </a>

  <a href="notifications.html" class="<!-- $tab-item-4? -->">
    <i class="material-icons">notifications</i>
    <div>Notifications</div>
  </a>

  <a href="more.html" class="<!-- $tab-item-5? -->">
    <i class="material-icons">menu</i>
    <div>More</div>
  </a>
</div>
`,
  };

  var IconButton = {
    props: {},
    template: `
              <div class="icon-button"><slot></slot></div>
          `,
  };

  var AdOverlay = {
    props: {},
    template: `

<div class="ad-overlay">
  <main>
    <header>
      <icon-button data-close>
        <i class="material-icons">expand_more</i>
      </icon-button>
    </header>

    <div>
      <slot></slot>
    </div>
  </main>
</div>

`,
  };

  var GenericOverlay = {
    props: {
      title: {
        type: String,
        default: null,
      },
    },
    template: `
              <div class="generic-overlay">
                <main>
                  <header>
                    <icon-button data-close
                      ><i class="material-icons">expand_more</i></icon-button
                    >
                    <span>{{title}}</span>
                    <tag-item secondary>242 jobs</tag-item>
                  </header>
                  <div>
                    <slot></slot>
                  </div>
                </main>
              </div>
          `,
  };

  var GenericModal = {
    props: {
      title: {
        type: String,
        default: null,
      },
    },
    template: `
<div class="generic-modal">
  <main>
    <header>{{title}}</header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <button data-close discreet>Cancel</button>
      <button data-close accent>Save</button>
    </footer>
  </main>
</div>
          `,
  };

  var CheckboxItem = {
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

  const app = Vue.createApp({});

  // *********************************************************************************
  // INCLUDE ALL SHARED COMPONENTS
  // *********************************************************************************
  app.component('grid-cell', GridCell);
  app.component('grid-row', GridRow);

  // *********************************************************************************
  // INCLUDE ALL LANEFINDER COMPONENTS
  // *********************************************************************************
  app.component('list-heading', ListHeading);
  app.component('list-item', ListItem);
  app.component('status-bar', StatusBar);
  app.component('carrier-list-item', CarrierListItem);
  app.component('tag-item', TagItem);
  app.component('header-backdrop', HeaderBackdrop);
  app.component('view-header', ViewHeader);
  app.component('main-view', MainView);
  app.component('box-block', BoxBlock);
  app.component('tooltip-once', TooltipOnce);
  app.component('form-block', FormBlock);
  app.component('button-container', ButtonContainer);
  app.component('view-content', ViewContent);
  app.component('navigation-bar', NavigationBar);
  app.component('mobile-tabs', MobileTabs);
  app.component('icon-button', IconButton);
  app.component('ad-overlay', AdOverlay);
  app.component('generic-overlay', GenericOverlay);
  app.component('generic-modal', GenericModal);
  app.component('checkbox-item', CheckboxItem);

  app.mount('#app');

}());
