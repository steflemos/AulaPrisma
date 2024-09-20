import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
const result = await prisma.courses.create({
data: {
  name: "Curso de React Native",
  duration: 300,
  description: "Curso com 300h de React Native",
    teacher: {
       connect: {
         id: "aa351625-b844-45a2-97a9-b37defc1b01d",
 		  },
 		 },
 	    },
 	});


console.log(result);
}


main();