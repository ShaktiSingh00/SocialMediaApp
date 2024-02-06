// // import { createContext, useEffect, useState } from "react";
// // // import image from '../assets/images/myImg.jpeg'
// // export const AuthContext = createContext();

// // export const AuthContextProvider = ({ children }) => {
// //   const [currentUser, setCurrentUser] = useState(
// //     JSON.parse(localStorage.getItem("user")) || null
// //   );

// //   const login = () => {
// //     setCurrentUser({
// //       id: 1,
// //       name: "John Doe",
// //       profilePic:  "https:images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg"
        
// //     });
// //   };

// //   useEffect(() => {
// //     localStorage.setItem("user", JSON.stringify(currentUser));
// //   }, [currentUser]);

// //   return (
// //     <AuthContext.Provider value={{ currentUser, login }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;
  const [currentUser, setCurrentUser] = useState(storedUser);

  const login = () => {
    const newUser = {
      id: 1,
      name: "Shakti SIngh",
      profilePic: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg"
    };
    setCurrentUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  useEffect(() => {
    // Update localStorage when currentUser changes
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      console.log("currentUser updated:", currentUser);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
