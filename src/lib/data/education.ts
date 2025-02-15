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
		period = { from: "", to: ""},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Linux', 'Python', 'Computer Architecture', 'Algorithms and Data structures']
	},
	{
		degree: 'Diploma of Computer Science & Engg.',
		description: '',
		location: 'Jharkhand',
		logo: Assets.Jut,
		name: '',
		organization: 'JUT, Ranchi',
		period = { from: "", to: ""},
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'Internet']
	}
];

const EducationData = { title, items };

export default EducationData;
