import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomtwoComponent } from './childcomtwo.component';

describe('ChildcomtwoComponent', () => {
  let component: ChildcomtwoComponent;
  let fixture: ComponentFixture<ChildcomtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcomtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
