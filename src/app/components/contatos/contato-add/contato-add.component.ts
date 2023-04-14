import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato-add',
  templateUrl: './contato-add.component.html',
  styleUrls: ['./contato-add.component.scss']
})
export class ContatoAddComponent implements OnInit {
  contato: Contato = {
    id: '',
    nome: '',
    email: '',
    telefone: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  telefone: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(private service: ContatoService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.contato).subscribe(() => {
      this.toast.success('Contato cadastrado com sucesso!', 'Contato');
      this.router.navigate(['contatos'])
    }, ex => {
      console.log(ex);
      this.toast.error('Email já cadastrado');
    })
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.telefone.valid
  }
}
