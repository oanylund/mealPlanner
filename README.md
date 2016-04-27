Meal Planner
========
Meteor SPA to generate shopping lists to make life easier and less repetitive.
The code contains 98% English comments and variables, but the UI is Norwegian.  

Pull request would be much appreciated.

### Install
Clone repository  

Install all packages:
```bash
npm install
```
Run meteor:
```bash
meteor
```

### How to use
1. Add some ingredient categories, then some ingredients
2. Add some dinners, using the ingredients you just created
3. Add week plans, using the dinners you just created
4. Generate shopping lists based on one of the week plans
5. Edit the shopping list for as you want
7. Use the list and go shopping
6. Repeat next week

### Storybook
Some components have stories. If you are unfamiliar with storybook, check out this awesome  [repo](https://github.com/kadirahq/react-storybook). To view the components in storybook, run:
```bash
npm run storybook
```
Then, go to http://localhost:9001/ and browse the stories. Make sure you have installed the devDependencies as well.

### Dependencies
- Meteor ^1.3, Node and Npm must be installed
- For dinners with thumbnails, the machine running the code needs to have _graphicsmagick_ or _imagemagick_ installed to be able to generate thumbnails.
