import {x} from '~/src/module1'

function greeter(person: string): string {
  return `${x}, ` + person;
}

var user = "Jane User";

console.log(greeter(user))