# braingineers

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

All temperatures are measured in Farenheit, to highten the feeling of our cultural differences.

Thanks for the fun challenge! Why this weather API is returning class cased json i will never know, but other than that, it works!

Things I did poorly/didn't do

- error handling, don't mess up
- pressing enter doesn't search, l a z y
- state management, i just passed the location key via query param, which would lead to extra reqs more likely, so I think this is a good use case for global management (rare)
- Bothered learning vue router, I used a link on the `<h1>The Weather</h1>` because it's outside of the router-view, l a z y
- Which brings me to how I laid out my app, oops. I had never used vue router, so I made a boo boo, but I would have taken the search bar out and put it into a sidebar on a layout, l a z y
- Css - VANILLA, I used BEM even though it is scoped, and i didn't bother installing a sass loader, which lead to some ugly css files
