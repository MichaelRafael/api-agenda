import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContatoAddComponent } from './contato-add.component';
import { ContatoService } from 'src/app/services/contato.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

fdescribe('ContatoAddComponent', () => {
  let component: ContatoAddComponent;
  let fixture: ComponentFixture<ContatoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot({
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      }), ],
      declarations: [
        ContatoAddComponent
      ],
      providers: [
        ContatoService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoAddComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
