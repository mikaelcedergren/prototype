var ad_overlay = (function () {
  'use strict';

  var adOverlay = {
    props: {},
    template: `

<div class="ad-overlay">
  <main>
    <header>
      <icon-button data-close>
        <i class="material-icons">expand_more</i>
      </icon-button>
    </header>

    <div>
      <slot></slot>
    </div>
  </main>
</div>

`,
  };

  return adOverlay;

}());
