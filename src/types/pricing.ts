export interface PriceSetting {
  id: number;
  type: 'Freelance' | 'Starter' | 'Business' | 'Enterprise';
  title: string;
  subtitle: string;
  amount_type: 'monthly' | 'yearly';
  monthly_amount: number;
  yearly_amount: number;
  points: string[];
  button_text: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface PricingPlan {
  id: number;
  type: string;
  name: string;
  description: string;
  monthly_amount: number;
  yearly_amount: number;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}
