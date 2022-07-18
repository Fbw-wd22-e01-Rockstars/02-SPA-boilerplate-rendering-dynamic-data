# `02` Rendering from objects
[![Status overview badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](#-results)


Now lets use a more complex variable to render our HTML, let's say we have the following JS Object containing a customer information:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

To retrieve any property from the `Customer` object we have to use the dot `.` operator like this:

```js
console.log(customer.first_name); // will print "Bob" on the console.
```

# :speech_balloon: Instructions

Open the `index.js` and create the necesary code to make your file render the following output into the DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1.App

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status0.svg) | Top level App component should render with customer details |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-boilerplate-rendering-dynamic-data)


[//]: # (autograding info end)