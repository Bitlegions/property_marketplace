import { prisma } from "../config/prismaConfig.js";


// ROUTE:1 : Register :  POST "api/user/register" 
// Create a User. No login required
export const createUser = async (req, res) => {

  let { email } = await req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).send({
      message: "User Created Succesfully",
      user: user,
    });
    console.log("User create successfully & email is :" + email);
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
    // throw new Error(err.message);
  }
};

// ROUTE: 3 : GetAllBookings : GET "api/user/getAllBookings"
// Fetch all booked visits. Login required    
export const getBookings = async (req, res) => {
    
    const {email} = req.body
    
    if (!email) {
        return res.status(400).json({ message: 'Email is required in the request body for get bookings' });
    }

    try{
        const bookings = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
        })

        if (!bookings) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).send(bookings)
    }
    catch(err){
        throw new Error(err.message)
    }
}

// ROUTE: 4 : CancleBooking : POST "api/user/cancelBooking/:id"
// Cancle booked visit. Login required
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
            res.status(404).json({message: "Booking Not found"})
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

// ROUTE: 5 : toFav : POST "api/user/toFav/:rid"
// Add resididenies to favorite. Login required
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

// ROUTE: 6 : Get all Fav : POST "api/user/getAllFavs"
// Get all favorite residencies. Login required
// export const getAllfavs = async (req, res) => {
//     const {email} = req.body

//     try{
//         const favRes = await prisma.user.findUnique({
//             where: {email},
//             select: {
//                 favResidenciesId: true
//             }
//         })
//         res.status(200).send(favRes)
//     }
//     catch(err){
//         throw new Error(err.message)
//     }
// }

export const getAllfavs = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required in the request body' });
    }

    try {
        const favRes = await prisma.user.findUnique({
            where: { email },
            select: {favResidenciesId: true}
        });

        if (!favRes) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(favRes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
