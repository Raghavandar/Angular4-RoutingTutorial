import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesHomeComponent } from './archives-home.component';

describe('ArchivesHomeComponent', () => {
  let component: ArchivesHomeComponent;
  let fixture: ComponentFixture<ArchivesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
