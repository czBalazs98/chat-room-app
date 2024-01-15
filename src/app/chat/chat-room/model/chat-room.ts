export interface ChatRoom {
  id: number;
  name: string;
  description?: string;
  rules: string | null;
  tags: string[] | null;
  imageSrc?: string;
}
