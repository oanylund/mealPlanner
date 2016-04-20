Meal Planner
========
Meteor SPA to generate shopping lists to make life easier and less repetitive.
The code contains 98% English comments and variables, but the UI is Norwegian.  

Pull request are always welcome.

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
1. Add some ingredient categories, then some ingredients.
2. Add some dinners, using the ingredients you just created
3. Add week plans, using the dinners you just created.
4. Generate shopping lists based on one of the week plans.
5. Edit the shopping list.
6. Repeat.

### Dependencies
- Meteor ^1.3, Node and Npm must be installed
- For dinners with thumbnails, the machine running the code needs to have _graphicsmagick_ or _imagemagick_ installed to be able to generate thumbnails.
