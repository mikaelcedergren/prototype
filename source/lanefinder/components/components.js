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
import AdOverlay from './ad-overlay.js';
import GenericOverlay from './generic-overlay.js';
import GenericModal from './generic-modal.js';
import CheckboxItem from './checkbox-item.js';

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
