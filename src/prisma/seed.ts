import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function generateUsers() {
	const numberOfUsers = 50; // Define the number of users you want to create

	for (let i = 0; i < numberOfUsers; i++) {
		await prisma.user.create({
			data: {
				email: faker.internet.email(),
				name: faker.internet.displayName(),
				image: faker.image.avatar(),
				password: faker.internet.password(),
				createdAt: faker.date.past({ years: 3 }), // Generates a date within the past year
				role: "USER", // Assuming 'USER' is a valid role in your schema
			},
		});
	}

	console.log(`Created ${numberOfUsers} dummy users`);
}

generateUsers()
	.then()
	.catch((e) => {
		console.log("error seeding db: ", e);
	});
