# SuperHero API

_Version 1.2.1_

Project has been deployed and can be viewed at https://dev.troychaplin.ca/heroes

## Getting Started

To get started open a terminal window and navigate to where you want to place a copy of the project and run the commands below. Once completed the project will automatically launch in your default browser.

```
git clone https://github.com/troychaplin/web-services-frontend-dev-test.git
cd web-services-frontend-dev-test
npm install
npm start
```

## Project Built With

-   [React](https://reactjs.org/)
-   [SWR](https://swr.vercel.app/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)
-   [SASS](https://sass-lang.com/)
-   [Font Awesome](https://fontawesome.com/)
-   [Google Fonts](https://fonts.google.com/)
-   [Figma](https://www.figma.com/)
-   [Tenon.io](https://tenon.io/)
-   [W3C Markup Validation Service](https://validator.w3.org/)

## Future Additions

- Tag filter — feature/tagfilter exists but is incomplete
- [Passing props using the spread operator](https://dev.to/arikaturika/passing-props-using-the-spread-operator-in-react-52e4)

## Overall Look and Feel

While the rating criteria states that I am to be loyal to the requested layout, I also considered the "add creative features" item under the triple bonus points heading as the door being left open to present an improved design.

As a designer I felt that the look and feel could be significantly improved so I decided to break this rule and show some design skills by providing a simple card design in Figma. This also allowed me to further expand on the CSS required to show the my depth of knowledge and understanding of a responsive mobile first layout.

- [View the original Figma card design](https://www.figma.com/community/file/1121778636443964664)

## Achieving Bonus Points

The following are things that I tried to incorporate into the project in order to earn single, double and triple bonus points. I understand that some of these can also see even more improvements and I look forward to feedback on how I can be better.

- Git flow and feature branches used throughout the project
- Added ESLint and Prettier to enforce consistent formatting
- SASS modules to scope style to each component and avoid style conflicts
- SASS variables and mixins to reduce style duplication
- Fully responsive layout with 4 breakpoints
- Unique look and feel including a heading font that could easily be found in any comic book
- Component composition to improve resuability
- Simple yet fun custom component for data loading and errors
- Added color elements to indicate if a hero is good, bad or neutral
- Validated with W3C Markup Validation Service
- A11y tested with Tenon.io
- Added changelog for release notes

## Easter Egg

As a means to play with `useEffect` and learn it first hand I've added an easter egg to the project. **Hint:** it's a popular mexican food whose fast food chain is represented by a chihuahua.

## Resources

-   [SuperHero API](https://akabab.github.io/superhero-api/api/)
-   [Making SWR reusable](https://swr.vercel.app/docs/getting-started#make-it-reusable)
-   [Font Awesome React Component](https://fontawesome.com/v6/docs/web/use-with/react/) - Using the [dynamic icon importing](https://fontawesome.com/v6/docs/web/use-with/react/add-icons) method
-   [Use SASS modules with React](https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e)
-   [Loading animations](https://cssfx.netlify.app/)
-   [Tailwind CSS](https://tailwindcss.com/docs/screen-readers) - I may not be able to use it for this test, but I'm stealing some of the CSS to use as mixins
-   [That time when you find the perfect font for the project](https://fonts.google.com/specimen/Fredericka+the+Great?query=Fredericka)
-   [Then later you need to find a better body font](https://fonts.google.com/specimen/Fira+Sans+Condensed?query=condensed&category=Sans+Serif,Display)
-   [Boots responsive breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints) - Used as a starting point, modified for the needs of this project
-   [Destructuring props in React](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)
-   [Keep a changelog](https://keepachangelog.com/en/1.0.0/)
