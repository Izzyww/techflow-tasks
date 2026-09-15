import { GerenciadorTarefas, statuses } from './taskModel.mjs';
const manager = new GerenciadorTarefas();
const $ = id => document.getElementById(id);
// textContent evita interpretar o título digitado como HTML.
function element(tag, text) { const e = document.createElement(tag); e.textContent = text; return e; }
function render() {
  $('board').replaceChildren();
  for (const status of statuses) {
    const column = element('section', ''); column.className = 'column';
    column.append(element('h2', status));
    const tasks = manager.listar().filter(t => t.status === status);
    if (!tasks.length) column.append(element('p', 'Nenhuma tarefa.'));
    for (const task of tasks) {
      const card = element('article', '');
      card.append(element('h3', task.title));
      column.append(card);
    }
    $('board').append(column);
  }
}
$('form').onsubmit = event => {
  event.preventDefault(); $('error').textContent = '';
  try {
    manager.criar({ title: $('title').value });
    $('form').reset();
    render();
  } catch (error) { $('error').textContent = error.message; }
};
render();
