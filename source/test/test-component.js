class UserCard extends HTMLElement {
  constructor() {
    super();

    const avatar = this.getAttribute('avatar') ?? '';
    const primary = this.getAttribute('primary') === '' ? 'primary' : '';

    this.innerHTML = `
    <div class="user-card ${primary}">
        <img />
        <h3>${this.getAttribute('name')}</h3>
        <div>${avatar}</div>
    </div>
    `;
  }
}

window.customElements.define("user-card", UserCard);
