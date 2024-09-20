import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de CSS",
      duration: 50,
      description: "Curso top de CSS",
      fk_id_teacher: "db338f55-2176-4e9e-90d9-91b3ba202f2b",
    },
  });


  console.log(result);
}


main();