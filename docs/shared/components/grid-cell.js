var grid_cell = (function () {
  'use strict';

  var gridCell = {
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

  return gridCell;

}());
