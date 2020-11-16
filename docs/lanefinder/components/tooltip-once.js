var tooltip_once = (function () {
  'use strict';

  var tooltipOnce = {
    props: {},
    template: `
              <div class="tooltip-once"><slot></slot></div>
          `,
  };

  return tooltipOnce;

}());
