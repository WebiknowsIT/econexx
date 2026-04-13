import { userLogout } from "@/store/action/authActions";
import { resetLoginData } from "@/store/slices/authSlice";
import * as url from "@/utils/Url";
import { getLocalStorageItem, removeLocalStorageItem,} from "./localStorage";

/**
 * ✅ Check if user is logged in
 */
export function isLoggedIn() {
  try {
    const userInfo = getLocalStorageItem("user-info");
    return !!userInfo?.token;
  } catch {
    return false;
  }
}

/**
 * ✅ Get token (reuse everywhere)
 */
export function getToken() {
  const userInfo = getLocalStorageItem("user-info");
  return userInfo?.token || null;
}

/**
 * ✅ Logout user
 */
export function logoutUser(dispatch, routerPush) {
  dispatch(userLogout());
  dispatch(resetLoginData());
  removeLocalStorageItem("user-info");
  if (routerPush) {
    routerPush(url.ROOT);
  }
}