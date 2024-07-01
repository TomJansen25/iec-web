import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import { IconAdjustmentsDollar, IconBackpack, IconHanger } from '@tabler/icons-react';
import classes from './who-we-work-with.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Pharmacists',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
    icon: <IconAdjustmentsDollar />
  },
  {
    image: 'lawyers',
    title: 'Lawyers',
    description: 'Fans obsess over the particular length and angle of its arms',
    icon: <IconBackpack />,
  },
  {
    image: 'accountants',
    title: 'Bank owners',
    description: 'They divvy up their prey evenly among the members of their pack',
    icon: <IconHanger />
  }
];

export function WhoWeWorkWith() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        {item.icon}
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

    return (
        <Container size={900} className={classes.wrapper}>
            <Text className={classes.supTitle}>Collaborations</Text>

            <Title className={classes.title} order={2}>
                Who we work with
            </Title>

            <Container size={900} p={0}>
                <Text c="dimmed" className={classes.description}>
                    Its lungs contain an organ that creates electricity. The crackling sound of electricity
                    can be heard when it exhales. Azurill’s tail is large and bouncy. It is packed full of the
                    nutrients this Pokémon needs to grow.
                </Text>
            </Container>

            <SimpleGrid cols={{ base: 2, xs: 3 }} spacing={50} my={30}>
                {items}
            </SimpleGrid>
        </Container>
    );
}