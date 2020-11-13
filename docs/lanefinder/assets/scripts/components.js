class ListItem extends HTMLElement {
  constructor() {
    super();

    const unread = this.getAttribute("unread") === "" ? "<span></span>" : "";
    const unreadClass = this.getAttribute("unread") === "" ? "unread" : "";
    const paragraph = this.getAttribute("paragraph")
      ? "<p>" + this.getAttribute("paragraph") + "</p>"
      : "";
    const tag = this.getAttribute("tag-content")
      ? '<tag-item class="' +
        this.getAttribute("tag-color") +
        '">' +
        this.getAttribute("tag-content") +
        "</tag-item>"
      : "";

    this.innerHTML = `
      <div class="list-item ${unreadClass}">
        <h3>
        ${unread}
        ${this.getAttribute("title")}</h3>
        ${paragraph}
        <div class="list-item-extra">
            ${tag}
            <span>24 may 2021</span>
        </div>
        </div>
        <hr class="depth" />
      `;
  }
}

window.customElements.define("list-element", ListItem);
