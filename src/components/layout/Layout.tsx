import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-sans text-brand-green bg-brand-sand">
      <Navigation />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
