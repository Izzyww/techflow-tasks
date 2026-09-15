import test from 'node:test';
import assert from 'node:assert/strict';
import { GerenciadorTarefas } from '../src/taskModel.mjs';
// Cada teste começa com uma lista independente.
test('cadastra e lista uma tarefa', () => {
  const g = new GerenciadorTarefas();
  const t = g.criar({ title: 'Conferir entrega' });
  assert.equal(g.listar()[0].id, t.id);
  assert.equal(t.status, 'A Fazer');
});
test('rejeita título vazio', () => {
  assert.throws(() => new GerenciadorTarefas().criar({ title: '  ' }));
});
test('remove espaços nas pontas', () => {
  assert.equal(new GerenciadorTarefas().criar({ title: '  Entrega  ' }).title, 'Entrega');
});
test('atualiza o título', () => {
  const g = new GerenciadorTarefas(); const t = g.criar({ title: 'Entrega' });
  g.atualizar(t.id, { title: 'Entrega revisada' });
  assert.equal(g.listar()[0].title, 'Entrega revisada');
});
test('muda status e rejeita status inválido', () => {
  const g = new GerenciadorTarefas(); const t = g.criar({ title: 'Entrega' });
  assert.equal(g.atualizar(t.id, { status: 'Concluído' }).status, 'Concluído');
  assert.throws(() => g.atualizar(t.id, { status: 'Inexistente' }));
});
test('exclui uma tarefa', () => {
  const g = new GerenciadorTarefas(); const t = g.criar({ title: 'Entrega' });
  g.excluir(t.id); assert.equal(g.listar().length, 0);
});
test('aceita prioridade alta e rejeita valor inválido', () => {
  const g = new GerenciadorTarefas(); const t = g.criar({ title: 'Urgente', priority: 'Alta' });
  assert.equal(t.priority, 'Alta');
  assert.throws(() => g.atualizar(t.id, { priority: 'Urgentíssima' }));
});
test('rejeita atualização e exclusão de tarefa inexistente', () => {
  const g = new GerenciadorTarefas();
  assert.throws(() => g.atualizar('nao-existe', { title: 'Entrega' }));
  assert.throws(() => g.excluir('nao-existe'));
});
