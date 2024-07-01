import { Hero } from "@/components/hero/hero";
import { WhoWeWorkWith } from "@/components/who-we-work-with/who-we-work-with";
import { ContactUs } from "@/components/contact/ContactUsForm";

export default function Home() {
	return (
		<main>
			<Hero />
			<WhoWeWorkWith />
			<ContactUs />
		</main>
	);
}
