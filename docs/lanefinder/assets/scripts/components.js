import GridCell from '../../../shared/components/grid-cell.js';
import GridRow from '../../components/grid-row.js';
import ListHeading from '../../components/list-heading.js';
import ListItem from '../../components/list-item.js';
import StatusBar from '../../components/status-bar.js';
import CarrierListItem from '../../components/carrier-list-item.js';
const app = Vue.createApp({});

app.component('grid-cell', GridCell);
app.component('grid-row', GridRow);
app.component('list-heading', ListHeading);
app.component('list-item', ListItem);
app.component('status-bar', StatusBar);
app.component('carrier-list-item', CarrierListItem);




app.component('tag-item', {
  props: {
    primary: {
      type: Boolean,
      default: null,
    },
  },
  template: `
              <div class="tag"><slot></slot></div>
          `,
});

app.component('header-backdrop', {
  props: {},
  template: `
              <div class="header-backdrop"></div>
          `,
});

app.component('view-header', {
  props: {},
  template: `
              <div class="view-header"><slot></slot></div>
          `,
});

app.component('main-view', {
  props: {},
  template: `
              <div class="main-view"><slot></slot></div>
          `,
});

app.component('box-block', {
  props: {},
  template: `
              <div class="box"><slot></slot></div>
          `,
});

app.component('tooltip-once', {
  props: {},
  template: `
              <div class="tooltip-once"><slot></slot></div>
          `,
});

app.component('form-block', {
  props: {},
  template: `
              <div class="form-block"><slot></slot></div>
          `,
});

app.component('button-container', {
  props: {},
  template: `
              <div class="button-container"><slot></slot></div>
          `,
});

app.component('view-content', {
  props: {},
  template: `
              <div class="view-content"><slot></slot></div>
          `,
});

app.component('navigation-bar', {
  props: {},
  template: `
              <div class="navigation-bar"><slot></slot></div>
          `,
});

app.component('mobile-tabs', {
  props: {},
  template: `
              <div class="mobile-tabs"><slot></slot></div>
          `,
});

app.component('icon-button', {
  props: {},
  template: `
              <div class="icon-button"><slot></slot></div>
          `,
});

app.component('ad-overlay', {
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
});

app.component('generic-overlay', {
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
});

app.component('generic-modal', {
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
});

// CHECKBOX

app.component('checkbox-item', {
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

// USER

app.component('user-list', {
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

app.mount('#app');
