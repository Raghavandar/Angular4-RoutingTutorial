import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesProfileComponent } from './archives-profile.component';

describe('ArchivesProfileComponent', () => {
  let component: ArchivesProfileComponent;
  let fixture: ComponentFixture<ArchivesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
