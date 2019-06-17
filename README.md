# braingineers

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

All temperatures are measured in Farenheit, good luck deciding of je een jas draagt.

Thanks for the fun challenge! Why this weather API is returning class cased json i will never know, but other than that, it works!  I don't have a ton of experience in Vue, so I can't wait for some feedback.

The api I selected does allow me to grab upcoming days by hour, only the next 12 hours of days, so I'm calling it for today everytime, but I would handle it by taking the day out of the url and matching it with the array of days.

Things I did poorly/didn't do

- error handling, don't mess up
- pressing enter doesn't search
- state management, i just passed the location key via query param, which would lead to extra reqs more likely, so I think this is a good use case for global management (rare)
- App layout
- vanilla css - didn't bother installing a sass loader
