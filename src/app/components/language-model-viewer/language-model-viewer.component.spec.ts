import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageModelViewerComponent } from './language-model-viewer.component';

describe('LanguageModelViewerComponent', () => {
  let component: LanguageModelViewerComponent;
  let fixture: ComponentFixture<LanguageModelViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageModelViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageModelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
