export const statuses = ['A Fazer', 'Em Progresso', 'Concluído'];
// Centraliza as regras usadas pela interface e pelos testes.
export class Tarefa {
  constructor({ id, title, status = 'A Fazer' }) {
    if (typeof title !== 'string' || !title.trim()) throw new Error('Informe um título para a tarefa.');
    if (title.trim().length > 100) throw new Error('O título deve ter até 100 caracteres.');
    if (!statuses.includes(status)) throw new Error('Status inválido.');
    this.id = id;
    this.title = title.trim();
    this.status = status;
  }
}
export class GerenciadorTarefas {
  constructor(tarefas = []) { this.tarefas = tarefas.map(t => new Tarefa(t)); }
  listar() { return this.tarefas.map(t => ({ ...t })); }
  criar(dados) {
    const tarefa = new Tarefa({ ...dados, id: globalThis.crypto.randomUUID() });
    this.tarefas.push(tarefa);
    return tarefa;
  }
  atualizar(id, dados) {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index < 0) throw new Error('Tarefa não encontrada.');
    const tarefa = new Tarefa({ ...this.tarefas[index], ...dados, id });
    this.tarefas[index] = tarefa;
    return tarefa;
  }
  excluir(id) {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index < 0) throw new Error('Tarefa não encontrada.');
    this.tarefas.splice(index, 1);
  }
}
