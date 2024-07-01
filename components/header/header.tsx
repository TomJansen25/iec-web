"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';


const links = [
	{ link: '/about', label: 'About' },
	{ link: '/experience', label: 'Experience' },
	{ link: '/ownership-services', label: 'Ownership Services' },
	{ link: '/bloodstock-services', label: 'Bloodstock Services' },
	{ link: '/contact', label: 'Contact' },
];

export function Header() {

	const pathname = usePathname()

	useEffect(() => {
		setActive(pathname)
	}, [pathname])

	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState('/');

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				//event.preventDefault();
				setActive(link.link);
			}}
		>
			{link.label}
		</Link>
	));

	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				<Link href="/" passHref>
					<Image 
						className={classes.logo} 
						src="/IEC-Name-Logo.png" 
						alt="IEC Logo" 
						height={80} 
						width={120}
					/>
				</Link>
				<Group gap={10} visibleFrom="sm">
					{items}
				</Group>
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
			</Container>
		</header>
	);
}