const main = document.getElementById('main');
main.classList.add('main_style');

const table = document.createElement('table');
table.classList.add('table_style');

const result = document.getElementById('result');

let count = 0;

const arrButtons = [
  'C', '<', '%', 'x',
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '^',
  '.', '0', '', '='
]

for (let i = 1; i <= 5; i++) {
  let tr = document.createElement('tr');
  tr.classList.add('class_tr');
  table.appendChild(tr);

  for (let index = 0; index < 4; index++) {
    let td = document.createElement('td');
    td.style.cursor = 'pointer';
    td.classList.add('class_td');
    td.innerText = arrButtons[count];
    tr.appendChild(td);
    count++;
  }
};

main.appendChild(table);

const tableData = document.querySelectorAll('.class_td');

for (const element of tableData) {
  element.addEventListener('click', () => {
    if (element.innerText === 'C') {
      result.innerText = '';
    };

    if (element.innerText === '<') {
      result.innerText = result.innerText.slice(0, - 1);
    };

    if (element.innerText !== '=' && element.innerText !== 'C' && element.innerText !== '<') {
      result.innerText += element.innerText;
    } else if (element.innerText === '=') {
      if (result.innerText.includes('+')) {
        const resultSoma = result.innerText.split('+');
        result.innerText = Number(resultSoma[0]) + Number(resultSoma[1]);
      } else if (result.innerText.includes('-')) {
        const resultSub = result.innerText.split('-');
        result.innerText = Number(resultSub[0]) - Number(resultSub[1]);
      } else if (result.innerText.includes('x')) {
        const resultMult = result.innerText.split('x');
        result.innerText = Number(resultMult[0]) * Number(resultMult[1]);
      } else if (result.innerText.includes('%')) {
        const resultDiv = result.innerText.split('%');
        result.innerText = Number(resultDiv[0]) / Number(resultDiv[1]);
      } else if (result.innerText.includes('^')) {
        const resultPot = result.innerText.split('^');
        result.innerText = Number(resultPot[0]) ** Number(resultPot[1]);
      }
    };
  });
};
