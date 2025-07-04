import cors from 'cors';

export const corsOptions = {
  origin: ['http://localhost:8080', 'http://frontend.com'],      // replace as per your need
  credentials: true,
};
