# braingineers

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

All temperatures are measured in Farenheit, good luck deciding if jij draagt en jas.

Thanks for the fun challenge! Why this weather API is returning class cased json i will never know, but other than that, it works!

Things I did poorly/didn't do

- error handling, don't mess up
- pressing enter doesn't search
- state management, i just passed the location key via query param, which would lead to extra reqs more likely, so I think this is a good use case for global management (rare)
- Bothered learning vue router, I used a link on the `<h1>The Weather</h1>` because it's outside of the router-view
- App layout
- Css - didn't bother installing a sass loader
