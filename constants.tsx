
import { MenuItem, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Salmon with Quinoa',
    description: 'Fresh Atlantic salmon grilled with lemon-herb butter, served over a bed of fluffy quinoa and roasted vegetables.',
    price: 24.99,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/salmon/600/400',
    tags: ['Healthy', 'Gluten-Free', 'Protein']
  },
  {
    id: '2',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice slowly cooked with wild mushrooms, finished with white truffle oil and aged Parmesan.',
    price: 19.50,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/risotto/600/400',
    tags: ['Vegetarian', 'Gourmet']
  },
  {
    id: '3',
    name: 'Burrata & Heirloom Salad',
    description: 'Creamy burrata cheese with colorful heirloom tomatoes, fresh basil, and a balsamic glaze reduction.',
    price: 14.00,
    category: 'Salads',
    image: 'https://picsum.photos/seed/burrata/600/400',
    tags: ['Fresh', 'Vegetarian']
  },
  {
    id: '4',
    name: 'Avocado Crunch Toast',
    description: 'Sourdough bread topped with smashed avocado, radish slices, pumpkin seeds, and a poached egg.',
    price: 12.50,
    category: 'Starters',
    image: 'https://picsum.photos/seed/avocado/600/400',
    tags: ['Brunch', 'Vegetarian']
  },
  {
    id: '5',
    name: 'Wild Berry Cheesecake',
    description: 'New York style cheesecake topped with a compote of freshly picked summer berries.',
    price: 9.00,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/cheesecake/600/400',
    tags: ['Sweet']
  },
  {
    id: '6',
    name: 'Mediterranean Lamb Chops',
    description: 'Succulent lamb chops marinated in garlic and rosemary, served with mint yogurt and baby potatoes.',
    price: 28.00,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/lamb/600/400',
    tags: ['Chef Special']
  },
  {
    id: '7',
    name: 'Cold-Pressed Green Juice',
    description: 'A refreshing blend of kale, green apple, cucumber, ginger, and lime.',
    price: 7.50,
    category: 'Beverages',
    image: 'https://picsum.photos/seed/juice/600/400',
    tags: ['Detox', 'Vegan']
  },
  {
    id: '8',
    name: 'Zucchini Noodle Pesto',
    description: 'Spiralized zucchini tossed in homemade basil walnut pesto with sun-dried tomatoes.',
    price: 16.50,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/zoodles/600/400',
    tags: ['Low-Carb', 'Vegan']
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/seed/rest1/800/600', alt: 'Restaurant Interior', caption: 'Warm and inviting ambiance' },
  { id: 2, url: 'https://picsum.photos/seed/rest2/800/600', alt: 'Chef Plating', caption: 'Precision in every plate' },
  { id: 3, url: 'https://picsum.photos/seed/rest3/800/600', alt: 'Outdoor Seating', caption: 'Fresh air dining' },
  { id: 4, url: 'https://picsum.photos/seed/rest4/800/600', alt: 'Fresh Ingredients', caption: 'Farm to table quality' },
  { id: 5, url: 'https://picsum.photos/seed/rest5/800/600', alt: 'Signature Drink', caption: 'Refreshing creations' },
  { id: 6, url: 'https://picsum.photos/seed/rest6/800/600', alt: 'Busy Night', caption: 'Where memories are made' },
];
