const sprites = new Image();
sprites.src = './sprites.png';


const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d')
contexto.fillStyle='#70c5ce';
const flappyBird = {
    spriteX:0,
    spriteY:0,
    largura:35,
    altura:25,
    x:10,
    y:50,
    desenha(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        flappyBird.velocidade += flappyBird.gravidade;
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
        flappyBird.x = flappyBird.x + 2;
    }
}
const cenario = {
    spriteX:390,
    spriteY:0,
    largura:275,
    altura:204,
    x:0,
    y:280,
    desenha(){
        contexto.fillRect(0,0, canvas.width, canvas.height)
        contexto.drawImage(
            sprites,
            cenario.spriteX, cenario.spriteY,
            cenario.largura, cenario.altura,
            cenario.x, cenario.y,
            cenario.largura, cenario.altura,




        );
        contexto.drawImage(
            sprites,
            cenario.spriteX, cenario.spriteY,
            cenario.largura, cenario.altura,
            cenario.x + cenario.largura, cenario.y,
            cenario.largura, cenario.altura,
           
        );
    }
}
const chao = {
    spriteX:0,
    spriteY:610,
    largura:223,
    altura:111,
    x:0,
    y:370,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x + chao.largura, chao.y,
            chao.largura, chao.altura,
           
        );
    }
}
const inicio = {
    spriteX:130,
    spriteY:0,
    largura:180,
    altura:152,
    x:70,
    y:70,
    desenha(){
        contexto.drawImage(
            sprites,
            inicio.spriteX, inicio.spriteY,
            inicio.largura, inicio.altura,
            inicio.x, inicio.y,
            inicio.largura, inicio.altura,
        );
    }
}
const TelaIncio = {
    desenha(){
        cenario.desenha();
        chao.desenha();
        flappyBird.desenha();
        inicio.desenha();
    },
    click(){
        telaAtiva = TelaJogo;
    }
}
var telaAtiva = TelaIncio;


function mudaTelaAtiva(){
    telaAtiva.click();
}
const TelaJogo = {
    desenha(){
        cenario.desenha();
        chao.desenha();
        flappyBird.desenha();
        flappyBird.atualiza();
    },
    click(){}
}
window.addEventListener("click", mudaTelaAtiva)
function loop(){
    telaAtiva.desenha()
    requestAnimationFrame(loop)
}




loop()



