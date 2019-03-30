# a-cat-a-dog-react

A React App for showing cats 🐱 and dogs 🐶.

## Screenshot

![](https://i.loli.net/2019/03/31/5c9fa6ca869d6.jpeg)

## How to use

### Before running it
Before cloning the repo and running it, you need to add a file `secret.ts` to 
the directory `/src/axios`. So, it would be `/src/axios/secret.ts`.

Then place following codes in it.

```typescript
export const catKey = 'APPLY THE KEY ON https://thecatapi.com/'
export const dogKey = 'APPLY THE KEY ON https://thedogapi.com/ '
```

For those 2 keys, you need to sign up in [thecatapi.com](https://thecatapi.com/) and [thedogapi.com](https://thedogapi.com/).

At the end, enter commands to run it :)

### Now run it
```bash
$ cd a-cat-a-dog-react

$ yarn install

$ yarn start
```

## Stacks

* [React](https://reactjs.org/)
* [React Router DOM](https://reacttraining.com/react-router/core/guides/philosophy)
* [Redux](https://redux.js.org/)
* [Material UI x React](https://material-ui.com/)
* [Axios](https://github.com/axios/axios)
* [Typescript](https://www.typescriptlang.org/)