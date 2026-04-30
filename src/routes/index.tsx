import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';

const Home = lazy(() => import('@/pages/Home.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="min-h-screen bg-brand-green flex items-center justify-center text-brand-gold font-heading text-2xl animate-pulse">Zebedee Realty</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div className="min-h-screen bg-brand-green flex items-center justify-center text-brand-gold font-heading text-4xl">404 - Not Found</div>,
  }
]);
