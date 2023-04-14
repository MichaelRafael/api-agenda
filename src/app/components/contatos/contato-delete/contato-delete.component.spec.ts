import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ContatoDeleteComponent } from './contato-delete.component';

describe('ContatoDeleteComponent', () => {
  let component: ContatoDeleteComponent;
  let fixture: ComponentFixture<ContatoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ContatoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
