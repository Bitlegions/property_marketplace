import { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllfavs } from "../utils/api";

const useFavourites = () => {
  const { userDetails, setuserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  // console.log("user email in userFavourites is : ");
  // console.log(user?.email);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllfavs(user?.email, userDetails?.token),
    // queryFn: () => getAllfavs(user?.email),
    onSuccess: (data) =>
      setuserDetails((prev) => ({ ...prev, favourites: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  // }, [userDetails?.token]);
  }, [userDetails?.favourites]);

  return { data, isError, isLoading, refetch };
};

export default useFavourites;