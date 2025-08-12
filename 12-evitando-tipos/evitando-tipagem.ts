// EVITANDO TIPAGEM

// No typescript, existem algumas formas de evitar os erros no momento de compilação de seu código

// ---ELEMENTOS-OPCIONAIS---

// É possível fazer com que um determinado parâmetro de um elemento seja opcional
// SINTAXE: elemento?: string

function sendSpaceship(spaceship: {pilot: string, copilot?: string}){
    // ...
}

sendSpaceship({pilot: 'Han Solo', copilot: 'Chewbacca'})

sendSpaceship({pilot: 'Luke'})

// ---UNKNOWN---

/* 
    Tipagem que permite que uma variável receba dados de tipos diversos, sem ocasionar um erro
    Porém, a variável "unknown" não pode ser atribuída a uma variável de tipo comum
*/

let input: unknown

input = 'Test'
input = 28
input = []

// let text: string
// text = input

// ---ANY---

/* 
    Basicamente, faz com que a variável "desative" o typescript
    Ou seja, o trecho de código funcionará como um código javascript converncional
    OBS: evite utilizar esta tipagem!
*/

// ---NEVER---

/* 
    Geralmente utilizado para indicar que um determinado trecho de código está ocasionando em erro
*/

// function verification(test){
//     if (test) {
//         // ...
//     } else {
//         let _check: never
//         let text = _check
//         return _check
//     }
// }