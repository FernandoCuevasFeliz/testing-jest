import * as contactos from '../src/functions/contactos';

const contacto = {
  id: 1,
  nombre: 'John',
  email: 'john@gmail.com',
};

describe('contactos', () => {
  beforeEach(() => {
    contactos.reiniciar();
  });

  it('incluir contactos', () => {
    contactos.incluir(contacto);
    const db = contactos.db();
    const dbUpdated = [contacto];

    expect(db).toEqual(dbUpdated);
  });

  it('contacto erroneo', () => {
    delete contacto.id;
    expect(() => contactos.incluir(contacto)).toThrow('Formato Invalido');
  });
});
