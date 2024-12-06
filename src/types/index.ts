export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  favorite: boolean;
}

export interface Folder {
  id: string;
  name: string;
  notes: string[];
  createdAt: Date;
}

export type ViewMode = 'edit' | 'preview' | 'split';
export type Theme = 'light' | 'dark' | 'system';