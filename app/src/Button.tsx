import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export function Button({ alunos }) {
  //PARA TRATAR EVENTOS APENAS CRIAMOS A FUNCAO/HANDLER DE EVENTOS E FAZEMOS SUA REFERENCIA NO ELEMENTO  A ESCUTAR O EVENTO
  const lista_de_alunos = alunos.map((aluno) => {
    <li key={aluno.id}>{aluno.name}</li>;
  });

  return <>
  <ul>{lista_de_alunos}</ul>
  </>;
}
