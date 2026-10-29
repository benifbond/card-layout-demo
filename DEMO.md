# Demo: Finding and fixing misaligned cards

## Setup

```bash
docker compose up --build
```

Open http://localhost:5173. Edits to files in `src/` hot-reload in the browser.

To reset to the buggy version afterwards: `git checkout -- src` (on `main`).
To show the finished fix: `git checkout fixed`.

## 1. Spot the problem

Point at the Team Directory grid:

- Cards in the same row are different heights.
- The "View profile" buttons don't line up across a row.

"This only shows up because some bios are longer than others. Let's find out why in the browser before we touch any code."

## 2. Inspect the grid

1. Right-click a card → **Inspect**.
2. In the Elements panel, select the parent `<section class="card-grid">`.
3. Click the **grid** badge next to it to turn on the grid overlay.

What to point out: the grid *cells* in a row are all the same height (the overlay shows them), but the cards inside don't fill them.

4. In the Styles panel, find the `.card-grid` rule (`CardGrid.css`). Untick `align-items: start`.

Cards now stretch to fill their cells, so every card in a row is the same height.

"Grid items stretch by default. `align-items: start` told them to shrink to their content."

## 3. Inspect the card

The heights match now, but the buttons still sit at different heights.

1. Select a short card's `<button class="card-button">`.
2. Look at the **box model** / hover highlight: the button sits right under the bio, with empty space below it.

"The button just follows the text. Nothing tells it to go to the bottom of the card."

3. On the `.card` rule, add live in DevTools:
   - `display: flex`
   - `flex-direction: column`
4. On `.card-button`, add `margin-top: auto`.

The buttons now line up across each row. The `auto` margin takes up all the leftover space above the button.

## 4. Fix it in the code

DevTools changes vanish on reload, so copy them into the source.

`src/components/CardGrid.css`: remove the `align-items: start` line.

`src/components/Card.css`:

```css
.card {
  display: flex;
  flex-direction: column;
  /* ...existing styles... */
}

.card-button {
  margin-top: auto;
  /* ...existing styles... */
}
```

Save. The page hot-reloads with the fix. Reload once more to show it sticks.

## Takeaways

- Look in the browser first. The grid overlay and box model showed *which* element was wrong before we opened a file.
- Toggle rules off in DevTools to test an idea in seconds.
- There were two causes stacked on top of each other. Fixing the first one revealed the second.
