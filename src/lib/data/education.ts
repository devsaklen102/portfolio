import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'B.Tech in Computer Science & Engg.',
		description: '',
		location: 'Bhopal',
		logo: Assets.Mits,
		name: '',
		organization: 'MITS',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Diploma of Computer Science & Engg.',
		description: '',
		location: 'Jharkhand',
		logo: Assets.Jut,
		name: '',
		organization: 'JUT, Ranchi',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

const EducationData = { title, items };

export default EducationData;
