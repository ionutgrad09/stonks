# Welcome to the MrQ take home assignment.

## Please read the instructions and the requirements carefully before you start working on the assignment.

### Please watch the video with instructions and walkthrough before starting the assignment

[FullInstructions.mp4](instruction_assets/FullInstructions.mp4)
<video width="320" height="240" controls>

  <source src="instruction_assets/FullInstructions.mp4" type="video/mp4">
</video>

In case of any issues with the video, you can find the instruction video in the [instruction_assets](instruction_assets) folder.

---

## General Notes

- The solution of the challenge should be inside the [frontend](frontend) folder.
  - Specifically in the [frontend/src](frontend/src) folder.
  - The [frontend/src/App.css](frontend/src/App.css) has a global css reset.
  - You may modify/remove/restructure any file in the [frontend/src/components](frontend/src/components) folder as you see fit, but the assignment can be solved optimally with the existing structure/files as well
  - All the assets are in the [frontend/src/assets](frontend/src/assets) folder.
  - The [frontend/src/services](frontend/src/services) has the socket service. It shouldn't be necessary to edit this.
- The colors can be found as css variables in the [frontend/src/index.css](frontend/src/index.css) file.
- As this project uses Redux Toolkit, you can find the typed `useAppSelector` and `useAppDispatch` hooks
  in the [frontend/src/hooks/redux.ts](frontend/src/hooks/redux.ts) file.
- For the effects (such as the glow effects of the stock card) you need to replicate the effect as close as possible.
- Do not submit any changes to the [backend](backend) and [socket](socket) folders.
  - _You might find it helpful to reduce the update interval of the price updates during the development_
- You might find it helpful to use tools/extensions such as `React Profiler` and `Redux DevTools`. Please
  **do not use** tools such as `Lighthouse` to measure performance as the metrics are irrelevant for this project.

---

## Getting Started

### The project can be started in two ways:

#### 1. Using the scripts in the root directory

**You need yarn version 2 or higher.**

- Run `yarn install` in the root directory to install all the dependencies.
  - This will also install the dependencies in the [frontend](frontend), [backend](backend) and [socket](socket) folders.
- Run `yarn start` in the root directory to start all of the services
- Go to http://127.0.0.1:5173/ to access the application

#### 2. Using the scripts in each folder

**Before running the commands, make sure you have installed the dependencies first by running `yarn install` in all
the directories.**

- Start the mocked backend server in [backend](backend) by running `yarn start`
- Start the mocked socket server in [socket](socket) by running `yarn start`
- Start the development server in [frontend](frontend) by running `yarn dev`

## Submitting the solution

You should push the starting project monorepo to a private repository (Such as GitHub, GitLab ...)

- The starting project should be on the `main` branch.
- The solution should be on a separate branch
  - There should be an opened pull request from the solution branch to the `main` branch
  - The pull request should have a description of the changes
- Once you are done, share the repository with `hiring.tech@mrq.com`

---

## Requirements

## General Requirements

You need to replicate the functionality and design as closely as possible to what is shown in the videos and images.

- Fully replicate the card , including:
  - Shake Animation (It is provided in the CSS)
  - The Glow states
  - The scaling and glow on user interaction (select/unselected)
  - The trend indicator (red/green arrows)
  - The implementation of the `SymbolCard` should be as granular as possible, i.e. SymbolCard should be a "smart" component built with "dumb" components.
- The Cards container
  - Visually
  - The scroll behavior
- The layout change between desktop and mobile devices.
- Price chart should be visible only when a card is selected.
- "+info" functionality (Show/hide the info on the cards)
- Persistence of the active/selected card when navigating to other tabs.
- Responsiveness
- Performance is critical!
- Formatting of the currency
- Improve initial loading time (do not try to measure, think of bundle size)
- Fix race condition (Price History chart)
- Follow established guidelines/practices in the project, such as:
  - Components structure
  - Imports/exports

#### Hints / Recommendations:

- Leverage Redux/RTK
- React Dev Tools is your friend

## Guidelines

- **The final solution should be highly optimized and implemented as efficiently as possible. In other words, the number of re-renders of the components and the bundle size on initial load should be as low
  as possible.** For example:
  - When the effects are active (shaking, glowing, etc.) the children of the component should not be re-rendered.
  - You should avoid re-rendering the whole component when only a part of it needs to be updated.
  - _(Hint: For the initial bundle size, in [router/index.ts](frontend/src/router/index.tsx), something combined with `Suspense` will get you there.)_
- **Please ensure that the code you submit reflects your best work and you use best practices.**
- **The commit history should be granular with descriptive commit comments**
- **You should write custom CSS (in other words, do not use UI Libraries). Using [BEM methodology](https://getbem.com/naming/) for CSS classes is a nice to have but not required.**
  - You can use postcss, sass, less, etc. if you prefer.
- **Avoid writing inline styles.**

## Dashboard Page Layout

[dashboard](instruction_assets/dashboard.jpg)

The layout consists of a `heading`,`info cards`, `news cards`, `navigation`, `stock cards list` and `price chart`.

**You only need to take care of the `stock cards list` part**

The layout should be responsive and should be able to be displayed on desktop, tablet and mobile devices.

- On desktop devices the price chart should take `400px` of the width. The remaining
  width should be used for the stock cards list.
- On tablet/mobile and other devices with screen smaller than `1024px`, the price chart should be displayed above the
  stock cards list.

### Stock Card List

The cards should be displayed in a responsive container. The container
should take the remaining of the height from the page

- bellow the title and navigation on desktop
- bellow the title, navigation and chart on tablet/mobile

#### User Actions:

- The user should be able to select a stock card by clicking on it. When a card is selected, it should be highlighted
  with black shadow and scaled up by around 2-4%. (Check video/images)
- If there is an active/selected card, the other cards should be scaled down by around 2-4%. (Check video/images)

[dashboard card active](instruction_assets/dashboard_card_active.png)

### Price Chart

The price history chart shows the price history of the selected stock. It should be visible only when a stock is selected.
The API call functionality is implemented. There is a flaw in the implementation in the hook which can cause unintended behaviour.
**Try to fix this**.

_(Hint: The flaw is in the `useEffect` hook. If for any reason the user has a slow connection,
sometimes the price chart won't behave as expected)_

### Stock Card

[card](instruction_assets/card_base.png)

[card red](instruction_assets/card_red.png)

[card green](instruction_assets/card_green.png)

**The stock card should be a responsive component.**

#### Variations

- Default _(no trend)_
- Positive trend _(green upwards arrow)_
- Negative trend _(red downwards arrows)_

#### Fields

- **Header**: Header title is the stock symbol. On the right side of the header there is a
  trend marker (only if the trend is available)

- **Trend Marker**: Some stocks may have a positive or negative
  trend which is indicated by **green** _(positive)_ and **red** _(negative)_ arrows.
  Assets for this can be found in the [frontend/src/assets](frontend/src/assets) folder.
- `assets` folder.

- **Price** _(in USD)_: Formatted price of the stock.
- **Company Name, Industry and Market cap**: Info fields about the stock.
  Assets for this can be found in the [frontend/src/assets](frontend/src/assets) folder.

#### Animations/Interactions specs

- If the price changes for more than 25% from the previous price, the card should shake
  - The shake animation class can be found in the [frontend/src/components/SymbolCard/symbolCard.css](frontend/src/components/SymbolCard/symbolCard.css) `symbolCard__shake`.
- If the `last price` change is `positive`, the card should flash with `green shadow`. (Check videos)
- If the `last price` change is `negative`, the card should flash with `red shadow`. (Check videos)
- If the card is currently selected, it should have a black shadow around it. (Check videos)
  - **NOTE**: The flashing shadow from the price changes takes precedence over the black shadow that is shown when a card is selected. (Check videos)

### Bonus points for using custom hooks, especially for the **animations** and **effects (box shadow)**

### ESTIMATED TIME: 2-4 hours

**_--- GOOD LUCK ---_**

If you have any questions, please send email to **[hiring.tech@mrq.com](mailto:hiring.tech@mrq.com?subject=[THA-Q]Frontend%20Challenge%20Question)**
.
