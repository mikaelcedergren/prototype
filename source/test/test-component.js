const template = document.createElement("template");
template.innerHTML = `
  <div class="user-card">
    <img />
      <h3></h3>
        <p><slot /></p>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  //   connectedCallback() {
  //     this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  //   }

  //   disconnectedCallback() {
  //     this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  //   }
}

window.customElements.define("user-card", UserCard);
