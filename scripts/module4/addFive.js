const fs = require('fs');
const readLine = require('readline/promises');
const DBModule4 = './scripts/module4/DBModule4.json';


function addFive(val) {
  return val + 5;
};


/*This function adding the new task on the json file */
async function addTaks(infoTasks) {
  try {
    const data = fs.readFileSync(DBModule4, 'utf-8');
    const tasks = JSON.parse(data);
    tasks.push(infoTasks);

    fs.writeFileSync(DBModule4, JSON.stringify(tasks, null, 2), 'utf-8');
    console.log('Tarefa salva com sucesso!');
  } catch (error) {
    console.log('Infelizmente a tarefa não pode ser salva: ' + error)
  }
}

/*This function using the createInterface method from readLine module to creating a interface for user and extract the new tasks informations 
at the end it calls the function to add the new task in the json document. */
async function getInfoTaks() {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const title = await rl.question('Informe o título da tarefa: ');
  const description = await rl.question('Descreva a tarefa: ');
  const priority = await rl.question('Informe a prioridade da tarefa entre: (baixa, média, alta): ');

  addTaks({ title: title, description: description, priority: priority });

  rl.close();
};

getInfoTaks();

module.exports = {
  addFive,
  addTaks
};
