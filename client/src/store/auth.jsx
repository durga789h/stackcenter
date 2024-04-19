//import { response } from "express";
import React, { createContext, useContext, useEffect, useState } from "react";
//import axios from 'axios'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
 
  const [aboutdata, setAboutData] = useState([]);
  const [homedata, setHomeData] = useState([]);
  const[coursedata,setCourseData]=useState([]);

  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem('token', serverToken);
  };

  let isloggedin = !!token;
  const LogoutUser = () => {
    setToken('');
    return localStorage.removeItem('token');
  }

  //jwt authentication-to get the currently loggedin user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        }
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      }
      else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("error fetching user data")

    }

  }
  //to fetch the service data from database
 

  const getabout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/datas/about', {
        method: "GET",
      })

      if (response.ok) {
        const data = await response.json();
        setAboutData(data.msg);
      }
    }
    catch (error) {
      console.log("error in about fetching");
    }
  }

  useEffect(() => {
    gethome();
    getabout();
    
    userAuthentication();
  }, [])


  const createAboutData = async (aboutData) => {
    try {
      const response = await fetch('http://localhost:5000/api/datas/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify(aboutData),
      });

      if (!response.ok) {
        throw new Error('Failed to create/update about data');
      }

      const newData = await response.json();
      const existingIndex = aboutdata.findIndex(item => item._id === newData._id);

      if (existingIndex !== -1) {
        setAboutData(prevAboutData => [
          ...prevAboutData.slice(0, existingIndex),
          newData,
          ...prevAboutData.slice(existingIndex + 1)
        ]);
      } else {
        setAboutData(prevAboutData => [...prevAboutData, newData]);
      }

      console.log('About data created/updated:', newData);
    } catch (error) {
      console.error('Error creating/updating about data:', error);
    }
  };

  const gethome = async () => {
    try {
      console.log('checking.. . .  . .')
      const response = await fetch('http://localhost:5000/api/home', {
        method: "GET",
      })

     console.log(response);

      if (response.ok) {
        const data = await response.json();
        setHomeData(data.data);

      }
    }
    catch (error) {
      console.log("error in about fetching");
    }
  }

  const createHomeData = async (formDataToSend) => {
    try {
      //const response = await axios.post('http://localhost:5000/api/home', formDataToSend);
      //if(response.ok){
     //   const data= await response.json();
     //   console.log(data);
     // }

       const response = await fetch('http://localhost:5000/api/home/upload', {
       method: 'POST',
        headers: {
         Authorization: authorizationToken,
        },
      body: formDataToSend,
      });
      console.log(response);

       if (!response.ok) {
         throw new Error('Failed to create/update home data');
      }

       const newData = await response.json();
      // const existingIndex = homedata.findIndex(item => item._id === newData._id);

      // if (existingIndex !== -1) {
      //   setHomeData(prevHomeData => [
      //     ...prevHomeData.slice(0, existingIndex),
      //     newData,
      //     ...prevHomeData.slice(existingIndex + 1)
      //   ]);
      // } else {
      //   setHomeData(prevHomeData => [...prevHomeData, newData]);
      // }

       console.log('home data created/updated:', newData);
    } catch (error) {
      console.error('Error creating/updating home data:', error);
    }
  };

  const getcourse = async () => {
    try {
      
      const response = await fetch('http://localhost:5000/api/media/all', {
        method: "GET",
      })

      // console.log(response, 'daewejklqwhkejqwkeqwkeqwkejhqw');

      if (response.ok) {
        const data = await response.json();
        setCourseData(data.data);

      }
    }
    catch (error) {
      console.log("error in course fetching");
    }
  }

  const createCourseData = async (formDataToSend) => {
    try {
        const response = await fetch('http://localhost:5000/api/media/create', {
            method: 'POST',
            headers: {
                Authorization: authorizationToken,
            },
            body: formDataToSend,
        });

        if (!response.ok) {
            throw new Error('Failed to create/update course data');
        }

        const Data = await response.json();
        console.log('Course data created/updated:', Data);
    } catch (error) {
        console.error('Error creating/updating course data:', error);
    }
};


  return (
    <AuthContext.Provider value={{
      storeTokenInLS, LogoutUser, isloggedin, user,  authorizationToken, isLoading
      , aboutdata, getabout, createAboutData, homedata, gethome, createHomeData,getcourse,createCourseData,coursedata
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
