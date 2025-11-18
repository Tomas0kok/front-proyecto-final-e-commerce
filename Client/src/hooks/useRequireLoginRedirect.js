import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function useRequireLoginRedirect() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function requireLogin(nextPathIfLogged) {
    if (!isAuthenticated) {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
      return false;
    }

    if (nextPathIfLogged) {
      navigate(nextPathIfLogged);
    }
    return true;
  }

  return requireLogin;
}

// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export function useRequireLoginRedirect() {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   function requireLogin(nextPathIfLogged) {
//     if (!isAuthenticated) {
//       navigate("/login", {
//         state: { from: location },
//         replace: true,
//       });
//       return false;
//     }

//     if (nextPathIfLogged) {
//       navigate(nextPathIfLogged);
//     }
//     return true;
//   }

//   return requireLogin;
// }
