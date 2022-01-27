# Habilidades

Neste projeto, verificamos se voce é capaz de:

- Utilizar JSX no React

- Utilizar corretamente o método `render()` para renderizar seus componentes

- Utilizar `import` para trazer componentes em diferentes arquivos

- Criar componentes de classe em React

- Criar múltiplos componentes a partir de um array

- Fazer uso de `props` corretamente

- Fazer uso de `PropTypes` para validar as `props de um componente`

---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto você vai desenvolver um modelo do sistema solar! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

- Visualizar todos os planetas do sistema solar renderizados na tela;

- Visualizar todas as cartas com informações sobre missões espaciais;

Ao final deste projeto, sua aplicação deverá ser algo semelhante a essa [imagem](https://www.figma.com/file/vcire16CytAa1QWrriuunm/Sistema-Solar?node-id=0%3A1).

## Desenvolvimento

Você deve desenvolver uma aplicação em React com criação de componentes de classe e passagem de props. Essa aplicação simulará uma visualização do **Sistema Solar**, bem como informações sobre diversas missões espacias que ocorreram ao longo da história.

As imagens dos planetas e as informações das missões são fornecidas no projeto. Você terá que desenvolver os componentes necessários para exibi-las na tela, conforme o descrito nos requisitos.

## Data de Entrega

- Projeto individual.

- Serão 1 dias de projeto.

- Data de entrega para avaliação final do projeto: `01/02/2022 - 14:00h`.

---

# Observações técnicas

Você já aprendeu a criar componentes React, e nesse projeto vamos praticar muito essa habilidade. Crie todos os seus componentes em arquivos separados, na pasta **src/components**, no formato _*NomeDoComponente.js*_. Isso é fundamental para que os testes funcionem corretamente.

## ESLint e Stylelint

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

---

## Execução de testes unitários

Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos do projeto será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Veja o exemplo abaixo para deixar mais nítido como usar esse requisito:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

Em alguns requisitos, utilizamos o `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

Para verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

```bash
npm test
```
