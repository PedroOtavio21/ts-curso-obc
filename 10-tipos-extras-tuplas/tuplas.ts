// ---TUPLAS---

/* 
    Seria uma forma de 'burlar' a tipagem de arrays no TypeScrip
    Basicamente, com tuplas, você pode:
    - Definir um tamanho limite
    - elementos de tipos diferentes

    OBS: sempre que declarar, deverá passar todos os atributos obrigatórios
*/

let tripulacao: [string, string, string] = ['', '', '']

tripulacao[0] = 'Pedro'
tripulacao[1] = 'Pedro'
tripulacao[2] = 'Pedro'

/* 
    Geralmente é utilizado para a desestruturação
*/

let coordenada: [number, number] = [5, 2]
let [x, y] = coordenada 

// Exemplo comum de uso: Hooks no React!
// let [name, setName] = useState('')