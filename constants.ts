import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Pure, concentrated energy. The cure for depresso.',
    price: '$3.50',
    image: 'https://picsum.photos/id/1060/400/300',
    category: 'hot'
  },
  {
    id: '2',
    name: 'Classic Latte',
    description: 'Smooth espresso with steamed milk and a thin layer of foam.',
    price: '$4.50',
    image: 'https://picsum.photos/id/63/400/300',
    category: 'hot'
  },
  {
    id: '3',
    name: 'Iced Americano',
    description: 'Espresso shots topped with cold water and ice. Refreshing.',
    price: '$4.00',
    image: 'https://picsum.photos/id/766/400/300',
    category: 'cold'
  },
  {
    id: '4',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and foam.',
    price: '$4.50',
    image: 'https://picsum.photos/id/425/400/300',
    category: 'hot'
  },
  {
    id: '5',
    name: 'Cold Brew',
    description: 'Steeped for 12 hours for a smooth, low-acid coffee.',
    price: '$5.00',
    image: 'https://picsum.photos/id/312/400/300',
    category: 'cold'
  },
  {
    id: '6',
    name: 'Pastry Selection',
    description: 'Fresh croissants and muffins baked daily.',
    price: '$3.00',
    image: 'https://picsum.photos/id/292/400/300',
    category: 'food'
  }
];

export const SYSTEM_INSTRUCTION = `
You are a witty, high-energy barista at "Alqohwah Coffee". 
Our motto is "More Espresso, Less Depresso".
We are open 7 AM - 4 PM.
We are Halal certified.
Your goal is to recommend a drink from the following menu based on how the user is feeling.
Menu: Signature Espresso, Classic Latte, Iced Americano, Cappuccino, Cold Brew.
Keep responses short, punchy, and fun. Use coffee puns if appropriate.
If someone mentions being sad or tired, emphasize the caffeine kick.
`;