# Open App Seed

Boilerplate for creating decentralized applications with [Open App Ecosystem](https://github.com/open-app/core) values embedded in the code as much as possible.

Uses the [open-app-provider](http://github.com/open-app/open-app-provider) to wrap your application with easy translations, theming and data fetching.

You'll need a server application running the protocols and GraphQL. The easiest way is to use [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server), to use it's ecosystem of plugins for protocols like [Secure Scuttlebot](https://scuttlebot.io/) and [Dat](http://datproject.org/). Or create your own and share with us!


## Features

- Universal: [React Native](https://facebook.github.io/react-native/) & [React Native DOM](https://github.com/vincentriemer/react-native-dom)
- Navigation: [React Navigation](https://reactnavigation.org/)
- Internationalization: [i18Next](https://www.i18next.com/)
- Theming: [styled-components](https://www.styled-components.com/docs/advanced#theming)
- Rebranding: [react-native-rename](https://github.com/junedomingo/react-native-rename)
- Declarative data-fetching: [Apollo GraphQL](https://www.apollographql.com/docs/react/)
- Code linting: [Prettier](https://prettier.io/)
- Accessibility:  [ESlint a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)

## Usage

Clonse and enter the directory: `git clone && cd $your-app-name`.

`yarn` or `npm i` to install the dependencies. Once that's done run either `npm run dom` or `npm run android` or `npm run ios` depending on where you want to start.

When you're ready to re-brand you're app, switch to new branch first so you have backup `git checkout -b rename-app`. Now just run `npm run setup` to start the script for rebranding your app.
