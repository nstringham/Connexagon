import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("game-board")
export class GameBoard extends LitElement {
  static styles = css`
    :host {
      contain: strict;
      display: grid;
      place-items: center;
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
    }

    canvas {
      height: 90vmin;
      width: 90vmin;
    }
  `;

  @query("canvas") canvas!: HTMLCanvasElement;

  @property()
  id!: string;

  render() {
    return html`
      <div>id: ${this.id}</div>

      <canvas></canvas>
    `;
  }
}
