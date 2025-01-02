export interface CardProps {
  title: string;
  imageSrc: string;
}

export interface FeatureProps {
  icon: string;
  text: string;
}

export interface AboutSectionProps {
  title: string;
  description: string;
}

export interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export interface NavItemProps {
  label: string;
  isHighlighted?: boolean;
}

export interface LogoProps {
  imageUrl: string;
  title: string;
} 