import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseportPagesComponent } from './baseport-pages.component';

describe('BaseportPagesComponent', () => {
  let component: BaseportPagesComponent;
  let fixture: ComponentFixture<BaseportPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseportPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseportPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
