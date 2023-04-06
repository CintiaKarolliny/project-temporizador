// Import stylesheets
import { MyTimer } from './my-timer';
import './style.css';

/*  DESAFIO 1: TEMPORIZADOR TABATA

Tabata é um treino de exercícios intervalados que consiste em 8 ciclos com 20 segundos de atividade e 10 segundos de descanso. Crie uma aplicação que ofereça ao usuário um temporizador com essas características. */

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TEMPORIZADOR TABATA</h1>`;

let myTimer = new MyTimer(
  document.getElementById('temporizador1'),
  document.getElementById('ciclo')
);

document.getElementById('ver').addEventListener('click', () => {
  document.getElementById('temporizador1').style.display = 'block';
  myTimer.start();
});