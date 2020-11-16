var main_view = (function () {
  'use strict';

  var mainView = {
    props: {},
    template: `
              <div class="main-view"><slot></slot></div>
          `,
  };

  return mainView;

}());
