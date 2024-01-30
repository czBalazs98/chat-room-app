import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageCardComponent } from './chat-message-card.component';

describe('ChatMessageCardComponent', () => {
  let component: ChatMessageCardComponent;
  let fixture: ComponentFixture<ChatMessageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatMessageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
