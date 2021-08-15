export interface Fighter {
  id: string;
  name: string;
  generation: string;
  role: string;
  make: string;
  users: string;
};

export const emptyFighter = {
  id: '',
  name: '',
  generation: '',
  role: '',
  make: '',
  users: ''
};