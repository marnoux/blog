import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/ui/theme-provider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './constants/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
