import { GerenciadorTarefas, statuses } from './taskModel.mjs';
const manager = new GerenciadorTarefas();
let editing = null;
const $ = id => document.getElementById(id);
// textContent evita interpretar o título digitado como HTML.
function element(tag, text) { const e = document.createElement(tag); e.textContent = text; return e; }
function reset() { editing = null; $('form').reset(); $('cancel').hidden = true; $('save').textContent = 'Adicionar tarefa'; }
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
      const select = element('select', ''); select.setAttribute('aria-label', 'Status de ' + task.title);
      for (const value of statuses) { const option = element('option', value); select.append(option); }
      select.value = task.status;
      select.onchange = () => { manager.atualizar(task.id, { status: select.value }); render(); };
      const edit = element('button', 'Editar'); edit.onclick = () => { editing = task.id; $('title').value = task.title; $('cancel').hidden = false; $('save').textContent = 'Salvar edição'; $('title').focus(); };
      card.append(select, edit); column.append(card);
    }
    $('board').append(column);
  }
}
$('form').onsubmit = event => {
  event.preventDefault(); $('error').textContent = '';
  try {
    const data = { title: $('title').value };
    if (editing) manager.atualizar(editing, data); else manager.criar(data);
    reset(); render();
  } catch (error) { $('error').textContent = error.message; }
};
$('cancel').onclick = reset;
render();
