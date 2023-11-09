import { createSlice } from "@reduxjs/toolkit";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { User } from "@/utils/types";
import { AppDispatch } from "../store";
import axios from "axios";
// import { supabaseUrl } from "@/utils/supabase";

// const supabase = createClientComponentClient({ supabaseUrl });
interface StateType {
  isAuthenticated: boolean;
  // user?: User;
  loading: boolean;
}

const initialState: StateType = {
  isAuthenticated: false,
  // user: undefined,
  loading: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state: StateType, action) => {
      state.isAuthenticated = action.payload;
    },
    // setUser: (state: StateType, action) => {
    //   state.user = action.payload;
    // },
    setLoading: (state: StateType, action) => {
      state.loading = action.payload;
    },
    // setEggPickTime: (state: StateType, action) => {
    //   if (state.user?.egg_picked_at) {
    //     state.user.egg_picked_at = action.payload;
    //   }
    // },
  },
});

// export const { setIsAuthenticated, setUser, setLoading, setEggPickTime } =
//   AuthSlice.actions;

export const { setIsAuthenticated, setLoading } =
  AuthSlice.actions;

export const register = (data: any) =>async (dispatch: AppDispatch) => {
  axios.post('http://localhost:5000/user/register', data)
  .then((res) => {
    console.log("res => ", res.data.msg);
  })
  .catch(err => {
    console.log("err => ", err);
  })
}

// export const getUser = () => async (dispatch: AppDispatch) => {
//   const { data, error } = await supabase.auth.getUser();
//   if (error) {
//     console.log("error occured getting user", error.message);
//     return dispatch(setLoading(false));
//   }

//   const { data: user, error: fetchError } = await supabase
//     .from("users")
//     .select()
//     .or(`steam_id.eq.${data.user.id},discord_id.eq.${data.user.id}`);

//   if (fetchError) {
//     console.log("error occured fetching user profile", fetchError?.message);
//     return dispatch(setLoading(false));
//   }
//   if (user) {
//     dispatch(setUser({ ...data.user, ...user[0] }));
//   }
//   return dispatch(setLoading(false));
// };

// export const updateUserProfile =
//   (user: User) => async (dispatch: AppDispatch) => {
//     dispatch(setLoading(true));
//     const { data, error } = await supabase
//       .from("users")
//       .update({ avatar: user.avatar, game_id: user.game_id, bio: user.bio })
//       .eq("id", user.id)
//       .select();

//     if (error) {
//       return console.log("error occured saved user data", error.message);
//     }
//     if (data) {
//       dispatch(setUser({ ...user, ...data[0] }));
//     }
//     return dispatch(setLoading(false));
//   };

export default AuthSlice.reducer;
