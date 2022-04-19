'use strict';
//Variáveis
let somamussarela = 0;
let somamista = 0;
let somacalabresa = 0;
let somastrogonoff = 0;
let vendamussarela = 0.00;
let vendamista = 0.00;
let vendacalabresa = 0.00;
let vendastrogonoff = 0.00;

let btnvendas = document.getElementById('vendas');
let btnestorno = document.getElementById('estorno');
let btnplanilha = document.getElementById('export');

//Eventos
btnvendas.addEventListener('click',venda,false);
btnestorno.addEventListener('click',estorno,false);
btnplanilha.addEventListener('click',planilha,false);

//Funções
function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somamussarela = somamussarela + 1;
        vendamussarela = vendamussarela + 25.00;
        document.getElementById('resultadomussarela').innerHTML = somamussarela;
        document.getElementById('vendamussarela').innerHTML = vendamussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somamista = somamista + 1;
        vendamista = vendamista + 25.00;
        document.getElementById('resultadomista').innerHTML = somamista;
        document.getElementById('vendamista').innerHTML = vendamista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somacalabresa = somacalabresa + 1;
        vendacalabresa = vendacalabresa + 25.00;
        document.getElementById('resultadocalabresa').innerHTML = somacalabresa;
        document.getElementById('vendacalabresa').innerHTML = vendacalabresa.toFixed(2);
    }else if(document.getElementById('strogonoff').checked)
    {
        somastrogonoff = somastrogonoff + 1;
        vendastrogonoff = vendastrogonoff + 25.00;
        document.getElementById('resultadostrogonoff').innerHTML = somastrogonoff;
        document.getElementById('vendastrogonoff').innerHTML = vendastrogonoff.toFixed(2);
    }
}

function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somamussarela = somamussarela - 1;
        vendamussarela = vendamussarela - 25.00;
        if(somamussarela < 0)
        {
            somamussarela = 0;
            vendamussarela = 0.00;
        }
        document.getElementById('resultadomussarela').innerHTML = somamussarela;
        document.getElementById('vendamussarela').innerHTML = vendamussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somamista = somamista - 1;
        vendamista = vendamista - 25.00;
        if(somamista < 0)
        {
            somamista = 0;
            vendamista = 0.00;
        }
        document.getElementById('resultadomista').innerHTML = somamista;
        document.getElementById('vendamista').innerHTML = vendamista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somacalabresa = somacalabresa - 1;
        vendacalabresa = vendacalabresa - 25.00;
        if(somacalabresa < 0)
        {
            somacalabresa = 0;
            vendacalabresa = 0.00;
        }
        document.getElementById('resultadocalabresa').innerHTML = somacalabresa;
        document.getElementById('vendacalabresa').innerHTML = vendacalabresa.toFixed(2);
    }else if(document.getElementById('strogonoff').checked)
    {
        somastrogonoff = somastrogonoff - 1;
        vendastrogonoff = vendastrogonoff - 25.00;
        if(somastrogonoff < 0)
        {
            somastrogonoff = 0;
            vendastrogonoff = 0.00;
        }
        document.getElementById('resultadostrogonoff').innerHTML = somastrogonoff;
        document.getElementById('vendastrogonoff').innerHTML = vendastrogonoff.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}
