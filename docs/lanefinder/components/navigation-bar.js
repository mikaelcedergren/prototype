var navigation_bar = (function () {
  'use strict';

  var navigationBar = {
    props: {},
    template: `
              <div class="navigation-bar"><slot></slot></div>
          `,
  };

  return navigationBar;

}());
