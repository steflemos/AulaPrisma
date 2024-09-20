import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.update({
        where: {
            id: 'ff4790f8-9807-4308-b980-712a4f9c371e'
        },
        data: {
            description: 'O pior curso e NOde.js que voec vai comprar.'
        }
    })
    console.log(result)
}

main()