import { prisma } from "../config/prismaConfig.js";

// 1. ROUTE: POST "/api/residency/create
// Add a new residency. Login Required
export const createResidency = async (req, res) => {
  const {
    title, description, price, address, country, city, facilities, image, userEmail,
  } = req.body;

  try {
    const residency = await prisma.residency.create({
      data: { title, description, price, address, country, city, facilities, image, owner: { connect: { email: userEmail } },
      },
    });
    res.send({ message: "residency created successfully", residency });
  } catch (err) {
    if (err.code == "P2002") {
      // P2002 is code for violation of unique element => here it is address
      res.send({ message: "A Residency with address already exists" });
      // throw new Error("A Residency with address already exists");
    } else {
      throw new Error(err.message);
    }
  }
};

// 2. ROUTE: GET "/api/residency/getAllRes
// Get all residency. No Login Required
export const getAllRes = async (req, res) => {
  // const residencies = await prisma.residency.findMany({
  //   orderBy: {
  //     createdAt: "desc"
  //   }
  // })
  // res.send(residencies)

  const residencies = await prisma.residency.findMany({
    where: {
      updatedat: {
        not: {
          equals: new Date("2023-01-09T12:00:00Z"),
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  
  res.send(residencies)
  
}


// 3. ROUTE: GET "/api/residency/:id
// Get particular residency. No Login Required
export const getResidency = async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id }
    })
    res.send(residency)
  }
  catch (err) {
    throw new Error(err.message)
  }
}
