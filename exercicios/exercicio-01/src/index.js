var spaceships = [];
// Primeiro método
function getSpaceshipInfos() {
    var name = String(prompt('Insira o nome da espaçonave:'));
    var pilot = String(prompt('Insira o nome do piloto'));
    var crewLimit = Number(prompt('Insira o limite da população da espaçonave:'));
    if (name.trim() === '') {
        return alert('Nome de nave vazio. Tente novamente');
    }
    if (pilot.trim() === '') {
        return alert('Nome de piloto vazio. Tente novamente');
    }
    if (isNaN(crewLimit) || crewLimit < 0) {
        return alert('Valor de tamanho de tripulação inválido. Tente novamente');
    }
    saveSpaceship(name, pilot, crewLimit);
    return alert('Espaçonave criada com sucesso.');
}
function saveSpaceship(name, pilot, crewLimit) {
    var newSpaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(newSpaceship);
}
// Segundo método
function addMember(name, spaceshipTarget) {
    spaceships[spaceshipTarget].crew.push(name);
}
function getNewMemberInfo() {
    var name = String(prompt('Insira o nome do novo membro:'));
    var spaceshipTarget = Number(prompt('Insira o indice da espaçonave desejada:'));
    if (name.trim() === '') {
        return alert('Valor de nome inserido é vazio. Tente novamente');
    }
    if (isNaN(spaceshipTarget) || spaceshipTarget < 0) {
        return alert('Valor inserido de alvo é inválido. Tente novamente');
    }
    if (spaceships[spaceshipTarget] === undefined) {
        return alert('Nave desejada não existe. Tente novamente');
    }
    addMember(name, spaceshipTarget);
    return alert('Membro salvo com sucesso em tripulação!');
}
// Terceiro método
function sendSpaceshipToMission(spaceshipTarget) {
    spaceships[spaceshipTarget].inMission = true;
}
function getMinCrew(spaceshipTarget) {
}
function getSpaceshipMissionInfo() {
    var spaceshipTarget = Number(prompt('Insira a nave que será enviada em missão:'));
    if (isNaN(spaceshipTarget) || spaceshipTarget < 0) {
        return alert('Valor de nave alvo inserido inválido. Tente novamente');
    }
    if (spaceships[spaceshipTarget].inMission) {
        return alert('A nave escolhida já se encontra em missão');
    }
    if (spaceships[spaceshipTarget].crew.length)
        Math.floor();
}
// Quarto método
function listSpaceships() {
    if (spaceships.length === 0) {
        return alert('A lista de espaçonaves se encontra vazia!');
    }
    else {
        spaceships.forEach(function (spaceship, index) {
            alert("".concat(index, ". ").concat(spaceship.name, "\n                Nome do Piloto: ").concat(spaceship.pilot, "\n                Limite de tripula\u00E7\u00E3o: ").concat(spaceship.crewLimit, "\n                Tripula\u00E7\u00E3o: ").concat(spaceship.crew.map(function (crewMember) { return crewMember; }), "\n                Em miss\u00E3o? ").concat(spaceship.inMission));
        });
    }
}
function showMenu() {
    return "Bem-Vindo ao execut\u00E1vel de exerc\u00EDcio 1!\n    Escolha uma das op\u00E7\u00F5es abaixo:\n    (1) Salvar espa\u00E7onave\n    (2) Adicionar membro em uma tripula\u00E7\u00E3o\n    (3) Enviar espa\u00E7onave em miss\u00E3o\n    (4) Listar espa\u00E7onaves\n    (5) Finalizar";
}
function execute() {
    var option = 0;
    do {
        option = Number(prompt(showMenu()));
        switch (option) {
            case 1:
                getSpaceshipInfos();
                break;
            case 2:
                // getNewMemberInfo()
                break;
            case 3:
                // sendSpaceshipToMission()
                break;
            case 4:
                listSpaceships();
                break;
            case 5:
                alert('Finalizando execução de exercício...');
                break;
            default:
                alert('Opção inserida inválida!');
        }
    } while (option !== 5);
}
execute();
