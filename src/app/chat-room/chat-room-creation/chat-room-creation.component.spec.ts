import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomCreationComponent } from './chat-room-creation.component';

describe('ChatRoomCreationComponent', () => {
  let component: ChatRoomCreationComponent;
  let fixture: ComponentFixture<ChatRoomCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatRoomCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
