import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './hero.module.css';

export function Hero() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
            <Title className={classes.title}>
                International Equine Consulting
            </Title>

            <Container size={640}>
                <Text size="lg" className={classes.description}>
                    Build more reliable software with AI companion. AI is also trained to detect lazy
                    developers who do nothing and just complain on Twitter.
                </Text>
            </Container>

            <div className={classes.controls}>
                <Button className={classes.control} variant="white" size="lg">
                    Get started
                </Button>
                <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                    Live demo
                </Button>
            </div>
        </div>
    </div>
  );
}