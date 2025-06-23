import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Birlasoft Limited.',
		shortDescription: 'Appointed as a Engineer at Birlasoft, a role that opened the door to a captivating world of technology. Here, I had the incredible opportunity to immerse myself in cutting-edge automation tools, explore the boundless possibilities of cloud computing, and embrace the transformative power of DevOps practices.',
		contract: ContractType.SalariedEmployee,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2022-05-09') },
		skills: getSkills('AWS', 'Docker','Azure','GCP','JavaScript'),
		name: 'Engineer- Cloud & Infrastructure',
		color: 'red',
		links: [],
		logo: Assets.BSL
	},
	{
		slug: 'software-freelance',
		company: 'GirlScript Foundation',
		shortDescription: 'Appointed as a Mentor in the Uplift Project for “C and C++ Programming ” where I will be working towards guiding the team over assigning the tasks to the participants and help them with making the program run till the end.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2020-05-01'),
			 to: new Date('2020-09-30')
},
		skills: getSkills('C','Cpp'),
		name: 'Mentor at Uplift Project',
		color: 'blue',
		links: [],
		logo: Assets.GSF
		/*shortDescription: 'Creating awesome applications for customers.'*/
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
