export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'hot' | 'cold' | 'food';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  BARISTA = 'BARISTA'
}