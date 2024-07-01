import {
    Image,
    Container,
    Title,
    Stack,
    Text,
    ProgressRoot, 
    ProgressSection, 
    ProgressLabel
} from '@mantine/core';
import NextImage from 'next/image';
import classes from './page.module.css';


export default function BloodstockServices() {

    const images = [
        "https://images.prismic.io/bpmb/b380da52-8805-471b-8cce-3c871440553b_BPM_Bloodstock_Services_GettingTechnical_1.jpeg?auto=compress,format",
        "https://images.prismic.io/bpmb/29b101bb-c9b3-4bdb-be1f-50211bbca505_BPM_Bloodstock_Services_GettingTechnical_2.jpeg?auto=compress,format",
        "https://images.prismic.io/bpmb/13297f53-d10a-496d-98f9-aa670614981e_BPM_Bloodstock_Services_GettingTechnical_3.jpeg?auto=compress,format",
    ]

    return (
        <Container size="lg" mt={50}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className="section-title">
                        Bloodstock Services
                    </Title>

                    <Text c="dimmed" mt="md">
                        With multiple generations and a lifetime of experience, Brendan was born into the harness 
                        racing industry. He has a keen eye for finding the right horses, where he devotes all his 
                        time and attention to BPM&apos;s acquisitions.
                    </Text>
                    <Text c="dimmed" mt="md">
                        No stone is left unturned. Brendan treats every horse like an addition to his personal 
                        portfolio. With complete professionalism, Brendan can help you with all the different 
                        facets that are involved in purchasing a standardbred both in Australia and overseas.
                    </Text>
                    <Stack mt={30}>
                        <ProgressRoot radius="xl" size="xl" >
                            <ProgressSection value={33}>
                                <ProgressLabel c={"white"}>Step 1 of 3</ProgressLabel>
                            </ProgressSection>
                        </ProgressRoot>
                        <Text c="dimmed">
                            <b>Selecting the right horse for your success</b> – no matter the brief, Brendan 
                            strives to find the right value for a racehorse that will suit your purse
                        </Text>
                        <ProgressRoot radius="xl" size="xl" >
                            <ProgressSection value={66}>
                                <ProgressLabel c={"white"}>Step 2 of 3</ProgressLabel>
                            </ProgressSection>
                        </ProgressRoot>
                        <Text c="dimmed">
                            <b>Bloodstock Agent</b> – Brendan acts on behalf of the client to purchase your 
                            horse directly.
                        </Text>
                        <Text c="dimmed" mt="sm">
                            <b>Vet examinations</b> – Once the right horse has been found to meet your needs, 
                            different levels of a vet exam can be organised to suit.
                        </Text>
                        <ProgressRoot radius="xl" size="xl" >
                            <ProgressSection value={100}>
                                <ProgressLabel c={"white"}>Step 3 of 3</ProgressLabel>
                            </ProgressSection>
                        </ProgressRoot>
                        <Text c="dimmed">
                            <b>Delivered to your trainer&apos;s barn</b> – All post-purchase organisation is completed 
                            for you, from air freight, road transport, HRNZ and HRA fees and registration, access to 
                            trainers, insurance, etc.
                        </Text>
                    </Stack>
                </div>
                
                <div className={classes.imageDiv}>
                    <Image component={NextImage} src={images[0]} alt={""} className={classes.image} width={500} height={500}></Image>
                    <Image component={NextImage} src={images[1]} alt={""} className={classes.image} width={500} height={500}></Image>
                    <Image component={NextImage} src={images[2]} alt={""} className={classes.image} width={500} height={500}></Image>
                </div>
            </div>
        </Container>
    );
}