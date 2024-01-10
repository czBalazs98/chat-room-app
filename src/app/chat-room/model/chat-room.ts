export interface ChatRoom {
  name: string;
  description?: string;
  rules: string[] | null;
  tags: string[] | null;
  imageSrc?: string;
}

export interface ChatRoomResponse {
  [key: string]: ChatRoom;
}
