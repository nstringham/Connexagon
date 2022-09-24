import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@material/web/fab/fab-extended";
import "./router-link";

@customElement("game-list")
export class GameList extends LitElement {
  static styles = css`
    md-fab-extended {
      position: fixed;
      bottom: 16px;
      right: 16px;
    }
  `;

  @state()
  games: string[] = ["1", "2", "3", "4", "5"];

  render() {
    return html`
      <ul>
        ${this.games.map((game) => html`<li><router-link href="/games/${game}">game ${game}</router-link></li>`)}
      </ul>
      <md-fab-extended icon="add" label="New game"></md-fab-extended>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "game-list": GameList;
  }
}
