import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaginatorComponent } from './test-paginator.component';

describe('TestPaginatorComponent', () => {
  let component: TestPaginatorComponent;
  let fixture: ComponentFixture<TestPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
