import { Contato } from './../model/contato';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ContatoService } from './contato.service';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

fdescribe('ContatoService', () => {
  let contatoService: ContatoService;

  const contatoResponse: Contato[] = [
    {
      id: '1',
      nome: 'João',
      email: 'joao@meuemail.com',
      telefone: '81999998888'
    },
    {
      id: '2',
      nome: 'Maria Clara',
      email: 'mc@meuemail.com',
      telefone: '81988887777'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContatoService,
        HttpClient,
        HttpHandler ],
      imports: [HttpClientTestingModule]
    });
    contatoService = TestBed.inject(ContatoService);
  });

  it('deveria criar o serviço', () => {
    expect(contatoService).toBeTruthy();
  });

  describe('findAll', () => {
    it('deveria retornar uma collection de contatos', () => {

      let response: Contato[] = [];
      spyOn(contatoService, 'findAll').and.returnValue(of(contatoResponse));

      contatoService.findAll().subscribe(res => {
        response = res;

      });

      expect(response).toHaveSize(2);
      expect(response).toEqual(contatoResponse);
    });
  });

  describe('findById', () => {
    it('deveria retornar um contato com id 1', () => {

      let response: Contato = {
        id: 0,
        nome: '',
        email: '',
        telefone: ''
      };
      spyOn(contatoService, 'findById').and.returnValue(of(contatoResponse[0]));

      contatoService.findById(1).subscribe(res => {
        response = res;

      });

      expect(response.id).toEqual(contatoResponse[0].id);
    });
  });

  describe('create', () => {
    it('deveria criar o contato', () => {

      let response: Contato = {
        id: 0,
        nome: '',
        email: '',
        telefone: ''
      };

      const contato: Contato = contatoResponse[0];
      spyOn(contatoService, 'create').and.returnValue(of(contatoResponse[0]));

      contatoService.create(contato).subscribe(res => {
        response = res;

      });

      expect(response).toEqual(contatoResponse[0]);
    });
  });

  describe('update', () => {
    it('deveria atualizar o contato', () => {

      let response: Contato = contatoResponse[1];

      const contato: Contato = contatoResponse[0];
      spyOn(contatoService, 'update').and.returnValue(of(contatoResponse[1]));

      contatoService.update(contato).subscribe(res => {
        response = res;

      });

      expect(response).toEqual(contatoResponse[1]);
    });

  });
});
