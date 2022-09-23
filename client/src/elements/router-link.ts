import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { navigate } from "../router";

@customElement("router-link")
export class RouterLink extends LitElement {
  @property()
  href = "";

  clickHandler(e: MouseEvent) {
    e.preventDefault();
    navigate(this.href);
  }

  render() {
    return html`<a href="${this.href}" @click="${this.clickHandler}"><slot></slot></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "router-link": RouterLink;
  }
}
