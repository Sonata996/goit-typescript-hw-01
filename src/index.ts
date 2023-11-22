import { foo } from "./concatenation";


const button = document.querySelector('button')!;

const input = document.querySelector('input')!;


if (input && button) {
  button.addEventListener('click', () => {
      foo(input.value,"hello!")
    })
}
