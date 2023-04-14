import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato-updated',
  templateUrl: './contato-updated.component.html',
  styleUrls: ['./contato-updated.component.scss']
})
export class ContatoUpdatedComponent implements OnInit {

  contato: Contato = {
    id: '',
    nome: '',
    email: '',
    telefone: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  telefone: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(private service: ContatoService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contato.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.contato.id).subscribe(resposta => {
      this.contato = resposta;
    })
  }


  updated(): void {
    this.service.update(this.contato).subscribe(() => {
      this.toast.success('Contato atualizado com sucesso!', 'Contato');
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
