# TechFlow Tasks — Parte teórica

## 1. Descrição e escopo inicial

O TechFlow Tasks é um sistema web básico de gerenciamento de tarefas, pensado para o cenário fictício da TechFlow Solutions e de uma startup de logística. O escopo inicial é cadastrar, listar, editar e excluir tarefas, além de alterar seu status entre A Fazer, Em Progresso e Concluído. A versão acadêmica usa JavaScript e armazena os dados no navegador. Não inclui login, banco de dados remoto, colaboração em tempo real nem métricas de desempenho da equipe.

## 2. Metodologia ágil

A metodologia proposta é o Kanban, com as colunas To Do (A Fazer), In Progress (Em Progresso) e Done (Concluído). Cada card representa uma atividade de desenvolvimento. O limite de trabalho em andamento proposto é uma atividade por vez, com conclusão condicionada à verificação da funcionalidade e dos testes relacionados. Essa organização facilita a visualização de pendências e reduz o acúmulo de atividades simultâneas.

## 3. Importância da modelagem

A modelagem ajuda a entender o sistema antes e durante a programação. O diagrama de casos de uso representa as ações disponíveis para a pessoa usuária. O diagrama de classes organiza os dados e as operações do sistema. Os arquivos casos-de-uso.svg e classes.svg contêm os diagramas correspondentes à implementação.

## 4. Mudança de escopo

A mudança de escopo simulada consiste em acrescentar prioridade baixa, média e alta às tarefas, permitindo identificar demandas urgentes da logística. Seu impacto envolve um campo na tarefa, um seletor na interface, validação e um teste adicional.

## 5. Testes automatizados e qualidade

O projeto contém testes unitários com o executor nativo do Node.js e verificações de sintaxe com node --check. Os testes cobrem cadastro válido, título vazio, remoção de espaços, edição, mudança de status, exclusão e identificador inexistente. A configuração do GitHub Actions executa essas verificações em push, pull request ou acionamento manual. A existência dessa configuração não comprova sua execução. Testes unitários não substituem a conferência da interface e não garantem ausência total de defeitos.

## 6. Aplicação e reflexão

Falhas de comunicação, tarefas mal definidas e mudanças sem planejamento podem causar atrasos. O GitHub ajuda a organizar o trabalho com cards, histórico de commits e verificações automáticas. Os principais beneficiados são os profissionais de logística, que acompanham as tarefas, e os gestores, que identificam pendências. Para lidar com mudanças, é importante avaliar o impacto, atualizar o quadro e testar novamente. Entregas pequenas e revisão frequente aplicam a ideia ágil de melhoria contínua.

## 7. Exemplo existente

Um exemplo real é o Jira, da Atlassian, que utiliza quadros e cards para acompanhar o trabalho. O TechFlow Tasks aproveita apenas a ideia básica de visualizar tarefas e seu andamento, sem tentar reproduzir todos os recursos de uma ferramenta profissional.

## 8. Evidências da execução

As evidências de execução no GitHub ainda não estão incorporadas a este documento.

## 9. Referências

GitHub Docs. Understanding GitHub Actions. https://docs.github.com/en/actions/get-started/understand-github-actions
Atlassian. What is Kanban in project management? https://www.atlassian.com/agile/kanban
Enunciado da atividade: Construindo um Projeto Ágil no GitHub: Da Gestão ao Controle de Qualidade.