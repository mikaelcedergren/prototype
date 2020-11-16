var tag_item = (function () {
  'use strict';

  var tagItem = {
    props: {
      primary: {
        type: Boolean,
        default: null,
      },
    },
    template: `
              <div class="tag"><slot></slot></div>
          `,
  };

  return tagItem;

}());
