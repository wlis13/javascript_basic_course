// let answer = prompt("What's your name?");
// let title = document.createElement('h1');
// title.textContent = answer;
// if (typeof (answer) === "string") {
//   document.body.appendChild(title);
// } else if (typeof (answer) === "number") {
//   document.body.innerText = "This is not a string!"
// };

let h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

let input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('input', function () {
  h1.innerText = input.value
});
