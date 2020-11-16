import GridRow from './grid-row.js';
import GridCell from './grid-cell.js';
import ListHeading from './list-heading.js';
import ListItem from './list-item.js';
import StatusBar from './status-bar.js';
import CarrierListItem from './carrier-list-item.js';
import TagItem from './tag-item.js';
import HeaderBackdrop from './header-backdrop.js';
import ViewHeader from './view-header.js';
import MainView from './main-view.js';
import BoxBlock from './box-block.js';
import TooltipOnce from './tooltip-once.js';
import FormBlock from './form-block.js';
import ButtonContainer from './button-container.js';
import ViewContent from './view-content.js';
import NavigationBar from './navigation-bar.js';
import MobileTabs from './mobile-tabs.js';
import IconButton from './icon-button.js';

const app = Vue.createApp({});

app.component('grid-cell', GridCell);
app.component('grid-row', GridRow);
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
