import { prisma } from "../config/prismaConfig.js";

export const createResidency = async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });
    res.send({ message: "residency created successfully", residency });
  } catch (err) {
    if (err.code == "P2002") {
      // P2002 is code for violation of unique element => here it is address
      throw new Error("A Residency with address already exists");
    } else {
      throw new Error(err.message);
    }
  }
};

export const getAllRes = async (req, res ) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    res.send(residencies)
} 
