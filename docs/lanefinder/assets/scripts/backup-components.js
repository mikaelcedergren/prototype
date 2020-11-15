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
    const extra = this.getAttribute("extra-content")
      ? "<span>" + this.getAttribute("extra-content") + "</span>"
      : "";

    this.innerHTML = `
      <div class="list-item ${unreadClass} ${layoutRightClass}">
        <h3>
        ${unread}
        ${this.getAttribute("title")}</h3>
        ${paragraph}
        <div class="list-item-extra">
            ${tag}
            ${extra}
        </div>
        </div>
        ${hrType}
      `;
  }
}

// class Checkbox extends HTMLElement {
//   constructor() {
//     super();

//     const checked = this.getAttribute("checked") === "" ? "checked" : "";

//     this.innerHTML = `
//       <input type="checkbox" id="${this.getAttribute("id")}" ${checked} />
//       <label for="${this.getAttribute("id")}">${this.getAttribute(
//       "label"
//     )}</label>
//       `;
//   }
// }

// class StatusBar extends HTMLElement {
//   constructor() {
//     super();

//     this.innerHTML = `
//         <img src="/shared/images/status-bar-black-left.png" class="dark" />
//         <img src="/shared/images/status-bar-black-right.png" class="dark" />
//         <img src="/shared/images/status-bar-left.png" class="light" />
//         <img src="/shared/images/status-bar-right.png" class="light" />
//       `;
//   }
// }

// class ListHeading extends HTMLElement {
//   constructor() {
//     super();

//     const extra = this.getAttribute("extra")
//       ? "<div>" + this.getAttribute("extra") + "</div>"
//       : "";

//     this.innerHTML = `
//         <h4>${this.getAttribute("title")}</h4>
//         ${extra}
//       `;
//   }
// }

window.customElements.define("checkbox-item", Checkbox);
window.customElements.define("list-heading", ListHeading);
window.customElements.define("status-bar", StatusBar);
window.customElements.define("list-element", ListItem);
