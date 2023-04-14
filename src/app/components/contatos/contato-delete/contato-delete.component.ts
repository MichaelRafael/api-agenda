import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato-delete',
  templateUrl: './contato-delete.component.html',
  styleUrls: ['./contato-delete.component.scss']
})
export class ContatoDeleteComponent implements OnInit {

  contato: Contato = {
    id: '',
    nome: '',
    email: '',
    telefone: ''
  }

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


  delete(): void {
    this.service.delete(this.contato.id).subscribe(() => {
      this.toast.success('Contato deletado com sucesso!', 'Contato');
      this.router.navigate(['contatos'])
    }, ex => {
      console.log(ex);
    })
  }

}
