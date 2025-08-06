# Aula 05 - Tipos Primitivos

Assim como no JavaScript, os tipos primitivos são os mais básicos e mais utilizados

São aqueles que você normalmente obtém usando o operador **typeof**

Existem 3 mais utilizados

- **boolean:** os valores que equivalem a **true** ou **false**
    - `let example: boolean = true`

- **number:** como o JavaScript não diferencia inteiros e pontos flutuantes, tudo é apenas considerado 
como number também no TypeScript
    - `let example: number = 10`

- **string:** valores de texto, como `"hello, world!"`
    - `let example: string = 'Hello'`

Além disso, temos também o **Array**, que representa as listas de dados

- A sintaxe básica para especificar um array é utilizando o tipo dos seus elementos. Por exemplo, 
`string[]` ou `number[]`
    - `let example: number[] = [1, 2, 3, 4]`
    - `let example: Array<number> = [1,2,3,4]`

- Idealmente, usamos arrays como sendo uma lista onde todos os elementos têm o mesmo tipo, 
mas esse comportamente também pode ser evitado