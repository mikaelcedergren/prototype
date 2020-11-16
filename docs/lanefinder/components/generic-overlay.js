var generic_overlay = (function () {
  'use strict';

  var genericOverlay = {
    props: {
      title: {
        type: String,
        default: null,
      },
    },
    template: `
              <div class="generic-overlay">
                <main>
                  <header>
                    <icon-button data-close
                      ><i class="material-icons">expand_more</i></icon-button
                    >
                    <span>{{title}}</span>
                    <tag-item secondary>242 jobs</tag-item>
                  </header>
                  <div>
                    <slot></slot>
                  </div>
                </main>
              </div>
          `,
  };

  return genericOverlay;

}());
