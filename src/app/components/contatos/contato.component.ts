import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class SobreComponent implements OnInit {

  ELEMENT_DATA: Contato[] = []

  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'acoes'];
  dataSource = new MatTableDataSource<Contato>(this.ELEMENT_DATA);

  constructor(private service: ContatoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      this.ELEMENT_DATA = res
      this.dataSource = new MatTableDataSource<Contato>(res);
    })
  }
}