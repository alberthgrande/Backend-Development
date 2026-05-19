/**
 * Modules
 *
 * JavaScript modules allow you to break up your code into separate fils.
 * This makes it easier to maintain and the code-base.
 * ES Modules rely on the import and export statements.
 */

import { name, age } from "./export.js";
import message from "./export.js";

console.log(name); // Alberth
console.log(age); // 27
console.log(message()); // My name is Alberth and I'm 27 years old.
