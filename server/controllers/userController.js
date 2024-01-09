
import { prisma } from "../config/prismaConfig.js";

export const createUser = async (req, res) => {
    
    console.log("Creating a user")

    let {email} = await req.body;

    const userExists = await prisma.user.findUnique({where: {email: email}})

    if(!userExists){
        const user = await prisma.user.create({data: req.body})
        res.send({
            message: "User Created Succesfully",
            user: user
        })
    }
    else{
        res.status(201).send({message: 'User Already Registered'})
    }
}