export interface ChatRoom {
  name: string;
  description?: string;
  rules?: string[];
  tags?: string[];
  imageSrc?: string;
}

export interface ChatRoomResponse {
  [key: string]: ChatRoom;
}
