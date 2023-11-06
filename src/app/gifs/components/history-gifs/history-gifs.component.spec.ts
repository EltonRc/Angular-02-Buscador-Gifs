import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGifsComponent } from './history-gifs.component';

describe('HistoryGifsComponent', () => {
  let component: HistoryGifsComponent;
  let fixture: ComponentFixture<HistoryGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryGifsComponent]
    });
    fixture = TestBed.createComponent(HistoryGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
