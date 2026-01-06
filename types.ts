
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Salads' | 'Desserts' | 'Beverages';
  image: string;
  tags: string[];
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export type Page = 'home' | 'about' | 'menu' | 'gallery' | 'contact';
