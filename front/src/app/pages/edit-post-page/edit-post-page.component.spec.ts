import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostPageComponent } from './edit-post-page.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('EditPostPageComponent', () => {
  let component: EditPostPageComponent;
  let fixture: ComponentFixture<EditPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditPostPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
