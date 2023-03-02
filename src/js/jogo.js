

function game(){
    event.preventDefault();
    let opcaoUsario = '' ;  
    let opcaoCpu = 0 ;

    opcaoUsario = document.getElementById('opcao').value;
    opcaoCpu = Math.floor(Math.random() * 3 );
    
    console.log(opcaoUsario);
    console.log(opcaoCpu);

    switch(opcaoUsario){
        case 'PEDRA':
                if (opcaoCpu == 0) {
                    alert('Empatou, Escolha da CPU: PEDRA');
                } else if (opcaoCpu == 1) {
                    alert('O CPU ganhou, Escolha da CPU: PAPEL')
                } else if (opcaoCpu == 2){
                    alert('Você ganhou, Escolha da CPU: TESOURA');
                }
        break;
        case 'PAPEL':
                if (opcaoCpu == 0) {
                    alert('Você Ganhou, Escolha da CPU: PEDRA');
                } else if (opcaoCpu == 1) {
                    alert('Empatou, Escolha da CPU: PAPEL')
                } else if (opcaoCpu == 2){
                    alert('Você Perdeu, Escolha da CPU: TESOURA');
                }
        break;
        case 'TESOURA':
                if (opcaoCpu == 0) {
                    alert('Perdeu, Escolha da CPU: PEDRA');
                } else if (opcaoCpu == 1) {
                    alert('Você Ganhou, Escolha da CPU: PAPEL')
                } else if (opcaoCpu == 2){
                    alert('Empatou, Escolha da CPU: TESOURA');
                }
        break;
        default:
            alert('Opção inválida!');
    }
        
    } 

    /* if (opcaoCpu == 0) {
        alert('Empatou');
    } else if (opcaoCpu == 1) {
        alert('O CPU ganhou')
    } else if (opcaoCpu == 2){
        alert('Você ganhou');
    } */