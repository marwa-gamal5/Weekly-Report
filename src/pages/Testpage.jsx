

// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// function Testpage() {
//     const [token, setToken] = useState('2e543e90174387feaa2e75321798ecf6bf96aad7');
//     const history = useHistory(); // Initialize useHistory
  
//     useEffect(() => {
//       // Save the token to local storage when the component mounts
//       localStorage.setItem('token', token);
//     }, [token]);
  
//     const handleClick = () => {
//       // Retrieve the token from localStorage
//       const storedToken = localStorage.getItem('token');
  
//       // Check if the token matches the expected value
//       if (storedToken === '2e543e90174387feaa2e75321798ecf6bf96aad7') {
//         // Use history.push to navigate to the desired route
//         history.push('/ViewAllUrl');
//       } else {
//         // Handle the case when the token doesn't match
//         alert('Invalid token');
//       }
//     };
    
// return(
//     <>
//  <button onClick={handleClick}>Check Token and Navigate</button>
//     </>
// )
// }
// export default Testpage;


// import React from 'react';
// function Testpage() {

    
//     let token = localStorage.getItem("2e543e90174387feaa2e75321798ecf6bf96aad7")

//   return (
//     <>
//       <div>
//       {/* <a href="http://192.168.11.100:8015/seo/view_all_url">Go to Other Project</a> */}
//       <a href="http://192.168.11.100:8015/seo/view_all_url?token=2e543e90174387feaa2e75321798ecf6bf96aad7">Go to Other Project</a>
//       </div>
//     </>
//   );
// }

// export default Testpage;


