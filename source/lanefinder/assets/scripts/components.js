class ListItem extends HTMLElement {
    constructor() {
      super();

      const avatar = this.getAttribute('avatar') ?? '';
      const primary = this.getAttribute('primary') === '' ? 'primary' : '';
      const unread = this.getAttribute('unread') === '' ? '<span></span>' : '';

      this.innerHTML = `
      <div class="list-element ${primary}">
        <h3>
        ${unread}
        ${this.getAttribute('title')}</h3>
        <p>${this.getAttribute('text')}</p>
        <div class="list-element-extra">
            <tag-item class="primary">New job</tag-item>
            <span>24 may 2021</span>
        </div>
      </div>
      `;
    }
  }

  window.customElements.define("list-element", ListItem);
