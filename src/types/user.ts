export interface CreateUserAssesmentInput {
	userId: string;
	firstName: string;
	lastName: string;
	mobileNo?: string;
	email?: string;
	country?: string;
	childrenNo?: number;
	age?: number;
	educationLevel?: "short" | "medium" | "long";
	educationField?: "short" | "medium" | "long";
	englishLevel?: "short" | "medium" | "long";
	frenchLevel?: string;
	ieltsScorce?: string;
	familyInCanada: boolean;
	travelHistory?: string;
	netWorth?: string;
	comment?: string;
}

export interface CreateUserWithAssessmentInput {
	username: string;
	assessment?: {
		firstName: string;
		lastName: string;
		mobileNo?: string;
		email?: string;
		country?: string;
		childrenNo?: number;
		age?: number;
		educationLevel?: "short" | "medium" | "long";
		educationField?: "short" | "medium" | "long";
		englishLevel?: "short" | "medium" | "long";
		frenchLevel?: string;
		ieltsScorce?: string;
		familyInCanada: boolean;
		travelHistory?: string;
		netWorth?: string;
		comment?: string;
	};
}

export interface CreateUserInput {
	username: string;
	email: string;
}
