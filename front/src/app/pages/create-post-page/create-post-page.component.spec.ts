import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostPageComponent } from './create-post-page.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('CreatePostPageComponent', () => {
  let component: CreatePostPageComponent;
  let fixture: ComponentFixture<CreatePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CreatePostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
