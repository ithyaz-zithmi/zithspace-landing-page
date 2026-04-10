export interface PriceSetting {
  id: number;
  title: string;
  subtitle: string;
  amount_type: 'monthly' | 'yearly';
  amount: number;
  points: string[];
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular: boolean;
  amount_type: 'monthly' | 'yearly';
}
