export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  category: string;
  link: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
