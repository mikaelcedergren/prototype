var form_block = (function () {
  'use strict';

  var formBlock = {
    props: {},
    template: `
              <div class="form-block"><slot></slot></div>
          `,
  };

  return formBlock;

}());
