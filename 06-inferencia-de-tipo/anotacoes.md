# Aula 07 - Inferência de Tipos

## Objetivos da Aula

- Mostrar na prática os tipos já abordados (boolean, number, string e array)
- Mostrar na prática como anotar o tipo de uma variável
- Mostrar o que é a inferência de tipos
- Mostrar como o VS Code infere tipos mesmo em um arquivo Javascript a partir do Typescript
- Mostrar que não é preciso anotar os tipos primários, eles serão quase sempre inferidos

## Snippets

Crie um arquivo index.js e um arquivo index.ts

```bash
touch index.js index.ts
```

Adicione o código TypeScript básico abaixo:

```ts
const spaceship = {
  name: 'X-Wing',
  speed: 0
};

function accelerate(spaceship, speed) {
  
}

accelerate(spaceship, 50);
```

Ao passar com o mouse sobre a variável spaceship é possível ver que a IDE já inferiu os tipos string e number. 
Mas é possível fazer mais.

Passe o mouse sobre os parâmetros da função e clique em "Correção rápida" e "Inferir todos os tipos de uso". 
Seu código agora estará assim:

```ts
const spaceship = {
  name: 'X-Wing',
  speed: 0
};

function accelerate(spaceship: { name: string; speed: number; }, speed: number) {
  
}

accelerate(spaceship, 50);
```

Agora é possível usar o autocompletar dentro da função, pois a IDE já sabe quais propriedades o objeto spaceship possui. 

Além disso, ele sinaliza erro ao tentar atribuir um valor que tenha um tipo diferente dos anotados:

```ts
function accelerate(spaceship: { name: string; speed: number; }, speed: number) {
  spaceship.speed = speed;
}
```