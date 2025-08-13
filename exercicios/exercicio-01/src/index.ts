interface Spaceship {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
}

let spaceships: Spaceship[] = []

// Primeiro método
function getSpaceshipInfos(){
    let name: string = String(prompt('Insira o nome da espaçonave:'))
    let pilot: string = String(prompt('Insira o nome do piloto'))
    let crewLimit: number = Number(prompt('Insira o limite da população da espaçonave:'))

    if (name.trim() === '') {
        return alert('Nome de nave vazio. Tente novamente')
    }

    if (pilot.trim() === '') {
        return alert('Nome de piloto vazio. Tente novamente')
    }

    if (isNaN(crewLimit) || crewLimit < 0) {
        return alert('Valor de tamanho de tripulação inválido. Tente novamente')
    }

    saveSpaceship(name, pilot, crewLimit)
    return alert('Espaçonave criada com sucesso.')
}

function saveSpaceship(name: string, pilot: string, crewLimit: number){
    const newSpaceship: Spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    spaceships.push(newSpaceship)
}

// Segundo método
function addMember(name: string, spaceshipTarget: number){
    spaceships[spaceshipTarget].crew.push(name)
}

function isSpaceshipFull(spaceshipTarget: number){
    return spaceships[spaceshipTarget].crew.length === spaceships[spaceshipTarget].crewLimit
}

function getNewMemberInfo(){
    let name: string = String(prompt('Insira o nome do novo membro:'))
    let spaceshipTarget: number = Number(prompt('Insira o indice da espaçonave desejada:'))

    if (name.trim() === '') {
        return alert('Valor de nome inserido é vazio. Tente novamente')
    }

    if (isNaN(spaceshipTarget) || spaceshipTarget < 0) {
        return alert('Valor inserido de alvo é inválido. Tente novamente')
    }

    if (spaceships[spaceshipTarget] === undefined) {
        return alert('Nave desejada não existe. Tente novamente')
    }

    if (isSpaceshipFull(spaceshipTarget)){
        return alert('Nave desejada se encontra em capacidade máxima. Tente novamente')
    }

    addMember(name, spaceshipTarget)
    return alert('Membro salvo com sucesso em tripulação!')
}

// Terceiro método
function sendSpaceshipToMission(spaceshipTarget: number){
    spaceships[spaceshipTarget].inMission = true
}

function verifyCrewCapacity(spaceshipTarget: number){
    return spaceships[spaceshipTarget].crew.length >= Math.floor(spaceships[spaceshipTarget].crewLimit / 3)
}

function getSpaceshipMissionInfo(){
    let spaceshipTarget: number = Number(prompt('Insira a nave que será enviada em missão:'))

    if (isNaN(spaceshipTarget) || spaceshipTarget < 0) {
        return alert('Valor de nave alvo inserido inválido. Tente novamente')
    }

    if (spaceships[spaceshipTarget].inMission) {
        return alert('A nave escolhida já se encontra em missão. Tente novamente')
    }

    if (!verifyCrewCapacity(spaceshipTarget)) {
        return alert('A nave possui uma tripulação insuficiente para ser enviada em missão.')
    }

    sendSpaceshipToMission(spaceshipTarget)
    return alert('A nave foi enviada em missão!')
}

// Quarto método
function listSpaceships(){
    if (spaceships.length === 0) {
        return alert('A lista de espaçonaves se encontra vazia!')
    } else {
        spaceships.forEach((spaceship, index) => {
            alert(`${index}. ${spaceship.name}
                Nome do Piloto: ${spaceship.pilot}
                Limite de tripulação: ${spaceship.crewLimit}
                Tripulação: ${spaceship.crew.map(crewMember => crewMember)}
                Em missão? ${spaceship.inMission}`)
        })
    }
}

function showMenu() {
    return `Bem-Vindo ao executável de exercício 1!
    Escolha uma das opções abaixo:
    (1) Salvar espaçonave
    (2) Adicionar membro em uma tripulação
    (3) Enviar espaçonave em missão
    (4) Listar espaçonaves
    (5) Finalizar`
}

function execute(){
    let option: number = 0
    do {
        option = Number(prompt(showMenu()))

        switch(option) {
            case 1:
                getSpaceshipInfos()
                break
            case 2:
                getNewMemberInfo()
                break
            case 3:
                getSpaceshipMissionInfo()
                break
            case 4:
                listSpaceships()
                break
            case 5:
                alert('Finalizando execução de exercício...')
                break
            default:
                alert('Opção inserida inválida!')
        }
    } while (option !== 5)
}

execute()