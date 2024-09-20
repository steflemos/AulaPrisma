import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.delete({
        where: {
            id: 'ff4790f8-9807-4308-b980-712a4f9c371e'
        }
    })
    console.log(result)
}


main()