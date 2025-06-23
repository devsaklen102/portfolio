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
		'A certified Cloud Professional with 3+ years of hands-on experience in cloud technologies and IT support, building a strong foundation for scalable growth. Currently working as a Cloud & Infrastructure Engineer at Birlasoft, driving cloud solutions and infrastructure excellence.',
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
