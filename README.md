# TechFlow Tasks

Sistema acadêmico de gerenciamento de tarefas para o cenário fictício da TechFlow Solutions, voltado a uma startup de logística.

## Objetivo e escopo inicial
Cadastro, listagem, edição, exclusão e acompanhamento de tarefas nos status A Fazer, Em Progresso e Concluído. A interface está em português e os dados são armazenados no navegador, sem login, banco remoto ou sincronização entre pessoas.

## Metodologia
A proposta de organização do desenvolvimento é o Kanban, com as colunas To Do, In Progress e Done e limite de uma atividade em andamento. A conclusão de uma atividade depende da verificação da funcionalidade e dos testes relacionados.

## Execução
Requisito: Node.js 22 ou superior. Não há dependências externas de execução.

    npm start

Endereço local: http://localhost:3000. Encerramento: Ctrl+C.

## Estrutura
- index.html: página do sistema
- src/main.js: interface e persistência
- src/taskModel.mjs: regras e classes
- src/style.css: aparência
- tests/task.test.mjs: testes unitários
- docs/: documentação teórica e diagramas UML
- .github/workflows/ci.yml: configuração do GitHub Actions
- server.mjs: servidor local de arquivos

## Testes e controle de qualidade
- npm test: executa os testes unitários com node:test.
- npm run check: verifica a sintaxe dos arquivos JavaScript.

O pipeline está configurado para executar ambas as verificações em push, pull request e acionamento manual. A configuração não comprova uma execução no GitHub. Os testes não cobrem toda a interface, segurança ou desempenho.

## Mudança de escopo
A mudança simulada acrescenta prioridade baixa, média e alta para destacar tarefas urgentes da logística. O impacto envolve um campo na tarefa, um seletor na interface, validação e um teste adicional. A versão atual inclui essa funcionalidade.
