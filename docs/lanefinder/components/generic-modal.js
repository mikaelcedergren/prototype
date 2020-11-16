var generic_modal = (function () {
  'use strict';

  var genericModal = {
    props: {
      title: {
        type: String,
        default: null,
      },
    },
    template: `
<div class="generic-modal">
  <main>
    <header>{{title}}</header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <button data-close discreet>Cancel</button>
      <button data-close accent>Save</button>
    </footer>
  </main>
</div>
          `,
  };

  return genericModal;

}());
