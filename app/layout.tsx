// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import './global.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { Header } from '@/components/header/header';
import { FooterSimple } from '@/components/footer/footer';

export const metadata = {
	title: 'IEC',
	description: 'International Equine Consulting',
	
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
				<link rel="icon" href="/favicon.ico" sizes='any' />
			</head>
			<body>
				<MantineProvider 
					defaultColorScheme="light"
					theme={{
						primaryColor: 'primary',
						colors: {
							'primary': ['#babff7', '#8c94f2', '#5f69ed', '#313ee8', '#1725ce', '#121da0', '#0c136b', '#0d1473', '#080c45', '#030417'],
							'secondary': ['#feebb4', '#fdde81', '#fcd14f', '#fcc41d', 'FCC930', '#e2aa03', '#b08503', '#7e5f02', '#4b3901', '#191300'],
						},
					}}
				>
					<Header />
					<main>{children}</main>
					<FooterSimple />
				</MantineProvider>
			</body>
		</html>
	);
}