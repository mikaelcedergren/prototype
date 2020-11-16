var box_block = (function () {
  'use strict';

  var boxBlock = {
    props: {},
    template: `
              <div class="box"><slot></slot></div>
          `,
  };

  return boxBlock;

}());
