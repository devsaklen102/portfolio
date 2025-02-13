const firstName = 'Md';
const lastName = 'Saklen';
const suffix = '$whois:saklen';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
