# Eatstro Hiring Project

Hello! This is a hiring project for our React Native developer position. You can find the job post [here](https://www.linkedin.com/jobs/view/3176111675).
If you apply, we will ask you to do this project so we can asses your ability to build React Native customer facing apps with our choice of stack. We have made some tech-choices for you. We leave all other decisions to you. Feel free to add libs and customize the project as per your taste. We trust you and respect your decisions.

| Requirement | Tech Choice                                           | Description                                                                                                            |
| ----------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Language    | TypeScript                                            | This will help you to catch bugs early. It also helps a lot with Codegen for GraphQL APIs.                             |
| Navigation  | React Navigation                                      | We find it quite good. We belive it's industry standard.                                                               |
| GraphQL API | React Query or URQL or Apollo                         | Choose any one to consume GraphQL API. We like React Query. Though there are no bad choices here.                      |
| Styling     | Styled Components, TailwindCSS                        | You can use any one you like or both of them 🙂                                                                        |
| Dev tools   | Prettier, ESLint                                      | Please wire it up as per your preference.                                                                              |
| Codegen     | Graphql Codegen                                       | You should definitely use codegen to consume GraphQL Queries. We leave the integration task for you.                   |
| Testing     | react-testing-library, Jest or and lib of your choice | We leave it to you. Please use any library that you find comfortable. Testing will earn you bonus points.              |
| Misc        | Lib of your choice                                    | We trust you. Tweak the project according to your preference. We will be curious to know why you made certain choices. |

# Tasks/Assignment

Translate the UI from [this Figma](https://www.figma.com/file/hlgqHKF9mwWrL6e7Lej7yo/Cookstro-Hiring) into _modular_ code.
APIs for the tasks can be found at [this url](https://mockend.com/lakhanmandloi/fake-api/graphql).

## Tasks

- Create a scrollable performant list of food items (with design of the card in figma) which can be scrolled vertically/horizontally.
- Create a Search bar that will allow to filter food items of the list based on name/price. The search keywords should appear after `Search results for`.
- Create a navigation bottom bar as per figma where Favourite, Cart, Orders and Profile pages are empty. Current page should be highlighted in the bar.
- The (+) button on food item card should create a toast that says "Added to Cart".
- The favourite button should just increment/decrement a random count on tap of it.
- Ensure shadow below food item card and over top side of food item image.
- Make use of assets from `Assignment-Assets.zip`.
- Display at least 4 different food items and the list should not flicker on scrolling 50+ food items.

# How to submit your solution:

- Please clone this repo. You can click on "Use this template" button to do so.
- Please complete the tasks.
- Once done, please share your repo with us on [people@cookstro.com](mailto:people@cookstro.com).
- We will contact you back within 48 hours.
- If you have any queries, please do contact us. We will try to answer your queries as soon as possible.
