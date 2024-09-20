import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma .courses.create({
        data: {
            name: "Curso de viagens alegres",
            duration: 50,
            description: "blablablablablablabla"
        }
    })

    console.log(result)
}

main()