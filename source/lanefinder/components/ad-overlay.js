export default {
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
