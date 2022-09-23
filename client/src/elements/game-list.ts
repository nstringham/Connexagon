import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "./router-link";

@customElement("game-list")
export class GameList extends LitElement {
  @state()
  games: string[] = ["1", "2", "3", "4", "5"];

  render() {
    return html`
      <ul>
        ${this.games.map((game) => html`<li><router-link href="/games/${game}">game ${game}</router-link></li>`)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "game-list": GameList;
  }
}
