import { prisma } from "../config/prismaConfig.js";


// ROUTE:1 : Create :  POST "api/user/register" 
// Create a User. No login required
export const createUser = async (req, res) => {
  console.log("Creating a user");

  let { email } = await req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).send({
      message: "User Created Succesfully",
      user: user,
    });
  } else {
    res.status(403).send({ message: "User Already Registered" });
  }
};

// ROUTE: 2 : Bookvisit : POST "api/user/bookVisit:id"
// Booking visit of user. Login required
export const bookVisit = async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "You already booked this residency" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getBookings = async (req, res) => {
    const {email} = req.body
    try{
        const bookings = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })
        res.status(200).send(bookings)
    }
    catch(err){
        throw new Error(err.message)
    }
}

export const cancelBooking = async (req, res) =>{
    const {email} = req.body
    const {id} = req.params

    try{
        const user = await prisma.user.findUnique({
            where:{email},
            select: {bookedVisits: true}
        })

        const index = user.bookedVisits.findIndex((visit) => visit.id === id)

        if(index === -1){
            res.staus(404).json({message: "Booking Not found"})
        }
        else{
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: {email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })

            res.send("booking cancelled successfully")
        }
    }
    catch(err){
        throw new Error(err.message)
    }
}

export const toFav = async (req, res) => {
    const {email} = req.body
    const {rid} = req.params

    try{
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(user.favResidenciesId.includes(rid)){
            const updatedUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesId :{
                        set: user.favResidenciesId.filter((id) => id !== rid)
                    }
                }
            })

            res.send({message: "Removed from favourites", user: updatedUser})
        }
        else{
            const updatedUser = await prisma.user.update({
                where: {email},
                data: {
                    favResidenciesId :{
                        push: rid
                    }
                }
            })
            res.send({message: "Updated favourites", user: updatedUser})
        }
    }
    catch(err){
        throw new Error(err.message)
    }
}

export const getAllfavs = async (req, res) => {
    const {email} = req.body

    try{
        const favRes = await prisma.user.findUnique({
            where: {email},
            select: {
                favResidenciesId: true
            }
        })
        res.status(200).send(favRes)
    }
    catch(err){
        throw new Error(err.message)
    }
}
