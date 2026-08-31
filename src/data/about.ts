import type { ContentBlock } from '../types/site'

export const aboutBlocks: ContentBlock[] = [
  { type: 'heading', content: 'Sobre mim' },
  { type: 'row' },
  {
    type: 'paragraph',
    content: 'Meu nome é Kauã, sou aluno da Escola Germinare TECH do Instituto J&F. Gosto muito de programação, jogar jogos, assistir anime e ouvir música.',
  },
  { type: 'row' },
  {
    type: 'paragraph',
    content:
      'Sempre tive vontade de fazer jogos, mas não sabia programar, nem sabia de lógica de programação. Antes de entrar na Germinare tentei fazer um jogo na Unity, que disponibiliza apenas C# como linguagem de programação, mas era muito complexo algumas funções e interfaces da Engine. O lado positivo foi o aprendizado de comportamentos básicos de componentes de um jogo.',
  },
  { type: 'row' },
  {
    type: 'paragraph',
    content:
      'No curso de Python da Germinare, aprendi a lógica de programação, o que ajudou a otimizar alguns códigos do jogo. Depois disso parei de utilizar a Unity e mudei para o GameMaker, que tem uma linguagem de programação própria, bem parecido com JS, com ferramentas que facilitam o uso, além de estar em português.',
  },
  { type: 'row' },
  { type: 'space' },
  { type: 'heading', content: 'Sobre o projeto do meu jogo' },
  {
    type: 'paragraph',
    content:
      'O jogo é estilo plataforma 2D, em pixel art, inspirado em alguns jogos de plataforma, mas que ainda está em refinamento qual será as principais mecânicas.',
  },
  {
    type: 'paragraph',
    content:
      'Até a presente data de 30/08/2026, o projeto está em desenvolvimento.\nSendo por enquanto um teste, mas se o desenvolvimento for algo grande e promissor, possa ser algo oficial para se lançar como jogo.\nGameplay de 17/01/2026.',
  },
]