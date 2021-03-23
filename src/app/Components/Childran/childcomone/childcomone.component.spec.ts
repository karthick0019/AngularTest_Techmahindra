import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomoneComponent } from './childcomone.component';

describe('ChildcomoneComponent', () => {
  let component: ChildcomoneComponent;
  let fixture: ComponentFixture<ChildcomoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcomoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
