import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 25; i++) {
    const country = faker.location.country();
    const myname = faker.company.name();
    await prisma.player.create({
      data: {
        name: faker.name.fullName(),
        goalCount: faker.number.int({ min: 0, max: 100 }),
        birthDate: faker.date.birthdate(),
        team: {
          connectOrCreate: {
            create: {
              country: country,
              name: myname,
            },
            where: {
              name: myname,
            },
          }
        }
      }
    })
  }

  for (let i = 0; i < 15; i++) {
    await prisma.team.create({
      data: {
        name: faker.company.name(),
        country: faker.location.country(),
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
