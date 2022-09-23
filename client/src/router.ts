import { html, render, TemplateResult } from "lit";

const outlet = document.querySelector("#outlet") as HTMLElement;

async function renderRoute(path: string) {
  render(await getRoute(path), outlet);
}

async function getRoute(path: string): Promise<TemplateResult> {
  const [_, page, id] = path.split("/");
  if (page === "games" && id) {
    await import("./elements/game-board");
    return html`<game-board id="${id}"></game-board>`;
  } else {
    await import("./elements/game-list");
    return html`<game-list></game-list>`;
  }
}

export function navigate(path: string) {
  const url = new URL(path, window.location.href);
  window.history.pushState(undefined, "", url);
  renderRoute(url.pathname);
}

window.addEventListener("popstate", () => {
  renderRoute(window.location.pathname);
});

renderRoute(window.location.pathname);

import("./elements/router-link");
