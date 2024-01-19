import { prisma } from "../config/prismaConfig.js";
// import {toast} from 'react-toastify';

// 1. ROUTE: POST "/api/residency/create
// Add a new residency. Login Required
export const createResidency = async (req, res) => {
  const {
    title, description, price, address, country, city, facilities, image, userEmail,
  } = req.body;
  const residencyExists = await prisma.residency.findUnique({
    where: { address_userEmail: { address, userEmail } },
  });  
  if (!residencyExists) {
    try {
      const residency = await prisma.residency.create({
        data: {
          title, description, price, address, country, city, facilities, image, owner: { connect: { email: userEmail } },
        },
      });
      res.send({ message: "residency created successfully", residency });
    } catch (err) {
      if (err.code == "P2002") {
        // P2002 is code for violation of unique element => here it is address
        res.send({ message: "A Residency with address already exists" });
      } else {
        throw new Error(err.message);
      }
    }
  }else {
    res.status(403).send({ message: "Residency Already Registered" });
  }
};

// 2. ROUTE: GET "/api/residency/getAllRes
// Get all residency. No Login Required
export const getAllRes = async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  res.send(residencies)

}


// 3. ROUTE: GET "/api/residency/:id
// Get particular residency. No Login Required
export const getResidency = async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency)
  }
  catch (err) {
    throw new Error(err.message)
  }
}
