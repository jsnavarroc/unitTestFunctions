import { expect } from '@jest/globals';
import contactos from './contactos';
import {variosContactos } from './data';


describe('contactos', () => { 
    describe('include', () => {
        // el beforeEach permite ejecutar metodos antes de que se ejecuten los test
        beforeEach(() => {
            contactos.reiniciar();
        })
        test('Should add contact with props {name, email, id}', () => {
            const contact = variosContactos[0];
            contactos.incluir(contact);
            const actualValue = contactos.db();
            const expectValue = [contact];
            expect(actualValue).toEqual(expectValue);
        })
        test("Should add contact with don't have props {name, email, id}", () => {
            const contatMoc = {
                nombre: 'Johan',
                email: 'j@gmail.com'
            }
            expect(() => contactos.incluir(contatMoc)).toThrow('Formato inválido');
        })
    });

    describe('borrar', () => {
        beforeEach(() => {
            contactos.reiniciar();
            variosContactos.forEach((contacto) => contactos.incluir(contacto));
        });
        test('Debe borrar solo el primer contacto', () => {
            contactos.borrar(1);
            const contactsActual = contactos.db();
            const conntactsExpect = [variosContactos[1], variosContactos[2]];
            expect(contactsActual).toEqual(conntactsExpect);
        });
        test('No debe borrar ningun contacto si el id no fue encontrado', () => {
            contactos.borrar(100);
            const contactsActual = contactos.db();
            const conntactsExpect =variosContactos;
            expect(contactsActual).toEqual(conntactsExpect);
        });
    });

    describe('starwars', () => { 
        test('debe contener personajes de starwars', (done) => { 
            const url = 'http://swapi.dev/api/people/';
            contactos.starwars(url)
                .then((count) => { 
                    expect(count).toBeGreaterThan(0);//el tamaño de lo que retorna es mayor a 0
                    done();
                })
        })

        test('Debe fallar si la url es incorrecta', async () => {
            const url = 'http://swapi.dev/api/yolo';
            const actual = contactos.starwars(url);
            //console.log(actual);//Request failed with status code 404
            await expect(actual).rejects.toEqual(Error('Request failed with status code 404')); // tiene que escribir el error tal cual responde
        });
    })
})