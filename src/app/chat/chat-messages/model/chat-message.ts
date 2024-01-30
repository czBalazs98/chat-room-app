export interface ChatMessage {
  id: number;
  created: Date;
  message: string;
  sender: string;
  chatRoomId: number;
}
