/**
 * Represents an array of option objects used for select/dropdown components
 * @typedef {Object} Option
 * @property {string} value - The data value that will be sent to the server and serves as a 'key' prop
 * @property {string} label - The display text shown to the user in the UI
 */

type Options = {
  value?: string;
  label?: string;
  id?: string;
  name?: string;
  children?: Options;
}[];

type CookiesKey = "Lendsqr-key";
