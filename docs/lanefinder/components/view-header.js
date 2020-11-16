var view_header = (function () {
  'use strict';

  var viewHeader = {
    props: {},
    template: `
              <div class="view-header"><slot></slot></div>
          `,
  };

  return viewHeader;

}());
