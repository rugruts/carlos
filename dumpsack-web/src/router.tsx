import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from '@/pages/Home';
import PremiumHome from '@/pages/PremiumHome';
import Features from '@/pages/Features';
import Download from '@/pages/Download';
import Gorbagana from '@/pages/Gorbagana';
import Developers from '@/pages/Developers';
import BrandAssets from '@/pages/BrandAssets';
import Blog from '@/pages/Blog';
import Support from '@/pages/Support';
import NotFound from '@/pages/NotFound';
import ModernShowcase from '@/pages/ModernShowcase';
import FigmaTemplate from '@/pages/FigmaTemplate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PremiumHome /> },
      { path: 'features', element: <Features /> },
      { path: 'download', element: <Download /> },
      { path: 'gorbagana', element: <Gorbagana /> },
      { path: 'developers', element: <Developers /> },
      { path: 'brand-assets', element: <BrandAssets /> },
      { path: 'blog', element: <Blog /> },
      { path: 'support', element: <Support /> },
      { path: 'modern-showcase', element: <ModernShowcase /> },
      { path: 'figma-template', element: <FigmaTemplate /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
