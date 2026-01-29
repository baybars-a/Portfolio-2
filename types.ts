
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'AI' | 'Design' | 'Mobile';
  link: string;
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}
