# Clean Code, Chapter 8: Boundaries

This project is meant to demonstrate some concepts from Chapter 8 of Clean Code.

## Key Concepts

**Wrap third-party code in a thin layer of abstraction. This allows you to:**

1. Create your own interface
2. More easily mock the third-party library in your code
3. Easily adapt to changes in the third-party library's API
4. Swap out underlying libraries if you want to change in the future

**Write "learning tests" to document a third-party library. This allows you to:**

1. Document how you intend to use the library
2. Easily catch breaking changes in the library when you upgrade dependencies

**Use mock data when the code you're integrating with doesn't exist yet. This allows you to:**

1. Not be blocked if you're a frontend developer waiting on a backend developer to create the backend API

## Running the App Locally

1. `yarn install`
2. `yarn start`
3. Navigate to http://localhost:3000/ in your browser

## Resources

- Day.js format: https://day.js.org/docs/en/display/format
- Day.js time from now: https://day.js.org/docs/en/display/from-now
- Moment.js: https://momentjs.com/
- date-fns: https://date-fns.org/
- date-fns format: https://date-fns.org/v2.25.0/docs/format
- date-fns time from now: https://date-fns.org/v2.25.0/docs/formatDistanceToNow
