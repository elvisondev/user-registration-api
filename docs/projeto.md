# PENDÊNCIAS DO PROJETO

## API

- [ ] Tratar busca sem correspondência
  - Atualmente retorna `204 No Content`
  - Avaliar retorno `404 Not Found`
  - Retornar uma mensagem informando que nenhum usuário foi encontrado

- [ ] Tratar rotas inexistentes
  - Evitar requisições sem resposta quando nenhuma rota corresponder
  - Retornar uma resposta HTTP apropriada

- [ ] Validar espaços vazios no parâmetro `name`
  - Verificar comportamento de `?name=   `
  - Avaliar uso de `trim()`

## BUSCA DE USUÁRIOS

- [ ] Avaliar refinamento da busca por nome
  - Nome
  - Sobrenome
  - Nome completo
  - Decidir se o campo `name` atual continua suficiente ou se o model será separado

- [ ] Avaliar normalização de nomes
  - Maiúsculas e minúsculas já estão tratadas
  - Verificar posteriormente busca com acentos

## REFATORAÇÃO

- [ ] Revisar responsabilidades entre Controller e Service
  - Avaliar se os códigos HTTP devem continuar sendo definidos no Service
  - Manter o Service menos dependente da camada HTTP

- [ ] Revisar parâmetros não utilizados
  - Remover parâmetros/imports que não sejam necessários

- [ ] Revisar finalização das respostas HTTP
  - Garantir que todos os fluxos executem `response.end()`
  - Garantir que a função seja encerrada quando necessário após enviar a resposta

## FINALIZAÇÃO

- [ ] Testar todos os endpoints após as alterações
- [ ] Atualizar `docs/app.md` conforme as novas features forem implementadas
- [ ] Atualizar o README somente com funcionalidades efetivamente concluídas