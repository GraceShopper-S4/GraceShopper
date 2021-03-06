/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllUsers} from './admin/allUsers';
export { default as SingleProduct } from "./SingleProduct";
export { default as Cart } from "./Cart";
export { default as DefaultHome } from "./DefaultHome";
export { default as SingleGenre } from "./SingleGenre";
export { default as Admin } from './admin'