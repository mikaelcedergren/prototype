class ListItem extends HTMLElement {
  constructor() {
    super();

    const unread =
      this.getAttribute("unread") === ""
        ? "<unread-marker></unread-marker>"
        : "";
    const hrType =
      this.getAttribute("layout-right") === ""
        ? "<hr />"
        : '<hr class="depth" />';
    const unreadClass = this.getAttribute("unread") === "" ? "unread" : "";
    const layoutRightClass =
      this.getAttribute("layout-right") === "" ? "layout-right" : "";
    const paragraph = this.getAttribute("paragraph")
      ? "<p>" + this.getAttribute("paragraph") + "</p>"
      : "";
    const tag = this.getAttribute("tag-content")
      ? "<tag-item " +
        this.getAttribute("tag-color") +
        ">" +
        this.getAttribute("tag-content") +
        "</tag-item>"
      : "";

    this.innerHTML = `
      <div class="list-item ${unreadClass} ${layoutRightClass}">
        <h3>
        ${unread}
        ${this.getAttribute("title")}</h3>
        ${paragraph}
        <div class="list-item-extra">
            ${tag}
            <span>${this.getAttribute("extra-content")}</span>
        </div>
        </div>
        ${hrType}
      `;
  }
}

window.customElements.define("list-element", ListItem);
