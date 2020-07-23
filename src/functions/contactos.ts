import axios from 'axios';

let conctactos: any[] = [];

export const incluir = (conctacto: IContacto) => {
  if (conctacto.id && conctacto.nombre && conctacto.email) {
    conctactos.push(conctacto);
  } else {
    throw 'Formato Invalido';
  }
};

export const borrar = (id: number) => {
  const index = conctactos
    .map(({ contactoId }) => contactoId)
    .findIndex((conId) => conId === id);

  if (index > -1) {
    conctactos = [
      ...conctactos.slice(0, index),
      ...conctactos.slice(index + 1),
    ];
  }
};

export const reiniciar = () => {
  conctactos = [];
};

export const db = () => [...conctactos];

export const starwars = async (url: string) => {
  const { data } = await axios.get(url);
  return data.count;
};
