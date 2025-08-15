// index.js
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();
const main = async () => {
    try {
        // const user = await prisma.user.create({
        //     data: {
        //         name: "yaswanth",
        //         email: `yaswanth${Date.now()}@gmail.com` // Use unique email to avoid constraint errors
        //     }
        // });
        // const user = await prisma.user.createMany({
        //     data: [
        //         {
        //             name: "ayanakoji kiyotaka",
        //             email: `ayanakoji@gmail.com` // Use unique email to avoid constraint errors
        //         },
        //         {
        //             name: "suzune horikita",
        //             email: `suzune@gmail.com` // Use unique email to avoid constraint errors
        //         },
        //     ]
        // });
        // const users = await prisma.user.findMany({
        //     where : {
        //         name : "ayanakoji kiyotaka"
        //     }
        // })
        // const users = await prisma.user.findUnique({
        //     where : {
        //         id : 2
        //     }
        // })
        const updatedUser = await prisma.user.update({
            where : {
                id : 3
            },
            data : {
                name : "SUZUNE"
            }
        })
        console.log(`user: ${JSON.stringify(updatedUser, null, 2)}`);
    } catch (e) {
        console.error('Error creating user:', e);
        throw e;
    }
};

main()
    .catch((e) => console.error('Main error:', e))
    .finally(async () => {
        await prisma.$disconnect();
    });