import { GerenciadorTarefas, statuses } from './taskModel.mjs';
const key = 'techflow-tasks';
const manager = new GerenciadorTarefas(JSON.parse(localStorage.getItem(key) || '[]'));
let editing = null;
let removed = null;
const $ = id => document.getElementById(id);
// textContent evita interpretar o título digitado como HTML.
function element(tag, text) { const e = document.createElement(tag); e.textContent = text; return e; }
function save() { localStorage.setItem(key, JSON.stringify(manager.listar())); render(); }
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
      select.onchange = () => { manager.atualizar(task.id, { status: select.value }); save(); };
      const edit = element('button', 'Editar'); edit.onclick = () => { editing = task.id; $('title').value = task.title; $('cancel').hidden = false; $('save').textContent = 'Salvar edição'; $('title').focus(); };
      const remove = element('button', 'Excluir'); remove.onclick = () => { removed = task; manager.excluir(task.id); if (editing === task.id) reset(); $('undo').hidden = false; save(); };
      card.append(select, edit, remove); column.append(card);
    }
    $('board').append(column);
  }
}
$('form').onsubmit = event => {
  event.preventDefault(); $('error').textContent = '';
  try {
    const data = { title: $('title').value };
    if (editing) manager.atualizar(editing, data); else manager.criar(data);
    save(); reset();
  } catch (error) { $('error').textContent = error.message; }
};
$('cancel').onclick = reset;
$('restore').onclick = () => { if (removed) { manager.tarefas.push(removed); removed = null; save(); } $('undo').hidden = true; };
render();
