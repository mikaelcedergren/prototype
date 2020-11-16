var button_container = (function () {
  'use strict';

  var buttonContainer = {
    props: {},
    template: `
              <div class="button-container"><slot></slot></div>
          `,
  };

  return buttonContainer;

}());
