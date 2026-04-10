export interface DemoRequest {
  id?: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  status?: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export interface DemoRequestResponse {
  success: boolean;
  message: string;
  data?: DemoRequest;
  error?: string;
}
