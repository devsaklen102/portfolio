import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'I am a Google & Microsoft Azure Cloud Certified professional with a strong foundation in cloud technologies and IT support. Currently working as a Technical Analyst at Birlasoft, I specialize in troubleshooting, cloud solutions, and optimizing system performance.',
	links: [
		{ label: 'GitHub', href: 'https://github.com', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-saklen/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Instagram', href: 'https://www.instagram.com/mdsaklen02/', icon: 'i-carbon-logo-instagram' },
		{ label: 'Email', href: 'mailto:dev.mdsaklen@hotmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
