import logoImg1 from '../../assets/logoImg1.png';
import logoImg2 from '../../assets/logoImg2.png';
import logoImg3 from '../../assets/logoImg3.png';
import Table from 'react-bootstrap/Table';
import './WeeklyReport.css';
import React, { useRef } from 'react';
import JsPDF from 'jspdf';
import 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { axiosInstance } from '../../network/axiosinstance';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { usePDF } from 'react-to-pdf';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
// import { useRef } from 'react';

function WeeklyReport() {
    const [titles, setTitles] = useState([]);
    const [CourseRegistrations, setCourseRegistrations] = useState([]);
     // Create state variables for start date and end date
     const [startDate, setStartDate] = useState(''); // Initialize with empty string
     const [endDate, setEndDate] = useState(''); // Initialize with empty string
    // Define a state variable to store the sum of CourseRegistration[2]
      const [sumOfCourseRegistrations, setSumOfCourseRegistrations] = useState(0);
    // Define a state variable to store the sum of title[1]
    const [sumOfTitleNumbers, setSumOfTitleNumbers] = useState(0);
   // Define a state variable to store the sum of CourseRegistration[1]
    const [sumOfCourseRegistrations1, setSumOfCourseRegistrations1] = useState(0);

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    // Event handler to update the start date state
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    // Event handler to update the end date state
    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    // Event handler for the submit button
    const handleSubmit = () => {
        // Update the Axios request with user-inputted start and end dates
        axiosInstance.post('/user/report/', {
            "start_date": startDate, // Use the user-inputted start date
            "end_date": endDate,     // Use the user-inputted end date
            "token": "03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f"
        }, {
            headers: {
                "Authorization": `Token 03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f`,
                "Content-Type": "application/json"
            },
        })
            .then((res) => {
                console.log(res)
                setTitles(res.data.contient);
                setCourseRegistrations(res.data.course_state);
                // ... (rest of your code)
                if ('error' in res.data) {
                    fetchData();
                    Swal.fire({
                        title: 'Faild',
                        text: 'There is no data available now for this date. Try entering another date',
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          // If the user confirms, refresh the page
                          window.location.reload();
                        }
                      });
               
                    console.log("There is no data available now for this date. Try entering another date")

                   
                }

                console.log(res);
            setTitles(res.data.contient);
            setCourseRegistrations(res.data.course_state);
    
            // Calculate the sum of CourseRegistrations[2]
            const sum = res.data.course_state.reduce((acc, current) => {
                return acc + current[2];
            }, 0);
    
            // Set the sum in the state variable
            setSumOfCourseRegistrations(sum);
    
            // Calculate the sum of title[1]
            const sum2 = res.data.contient.reduce((acc, current) => {
                return acc + current[1];
            }, 0);
    
            // Set the sum in the state variable
            setSumOfTitleNumbers(sum2);
      
    
    
            // Calculate the sum of CourseRegistrations[1]
            const sum3 = res.data.course_state.reduce((acc, current) => {
                return acc + current[1];
            }, 0);
    
            // Set the sum in the state variable
            setSumOfCourseRegistrations1(sum3);
            })
            .catch((err) => {
                console.log("Error while fetching data:", err);
            });
    };

    // const generatePDF = () => {
    //     const report = new JsPDF('landscape', 'pt', 'a2');
    //     report.html(document.querySelector('#report')).then(() => {
    //         report.save('report.pdf');
    //     });
    // };

    // useEffect(() => {
    //     fetchData();

    // }, []);
    const fetchData = () => {
        axiosInstance.post('/user/report/', {
            "start_date": startDate,
            "end_date": endDate,
            "token": "03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f"
        }, {
            headers: {
                "Authorization": `Token 03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f`,
                "Content-Type": "application/json"
            },
        })
        .then((res) => {
            console.log(res);
      
        })
        .catch((err) => {
            console.log("Error while fetching data:", err);
        });
    };



    const options = {
        // default is `save`
        method: 'open',
       
        resolution: Resolution.HIGH,
        page: {
           // margin is in MM, default is Margin.NONE = 0
           margin: Margin.SMALL,
           // default is 'A4'
           format: 'B4',
           // default is 'portrait'
           orientation: 'landscape',
        },
       
       
       
     };
     
     // you can use a function to return the target element besides using React refs
     const getTargetElement = () => document.getElementById('content-id');

    return (<>
        <div>
        <button onClick={handleSubmit}>Submit</button>
          
            {/* <button onClick={generatePDF} type="button">
                Export PDF
            </button> */}
              <button onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
              <div id="content-id">
             <div id="report"  >
                <div id="sectionone">
                    <div className='row  m-5 d-flex  align-items-center '>
                        <div className='col-2'>
                            <img src={logoImg3} alt="Logo3" />
                        </div>

                        <div className="p col-8 ">
                            <p className="p1 d-flex align-items-center justify-content-center">Weekly Report</p>
                            <p className="p2 d-flex align-items-center justify-content-center"><span>From </span>  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                /><span>To </span>  <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
            /> </p>
                        </div>


                        <div className='col-2  d-flex align-items-center justify-content-end '>
                            <div><img className='logoImg1 p-3 ' src={logoImg1} alt="Logo1" /></div>
                            
                          <div> <img className='logoImg2 p-3' src={logoImg2} alt="Logo2" /></div>
                           
                        </div>




                    </div>
                </div>
                <div id="sectiontwo">
                    <div className='row m-4'>
                        <div className=' col-4 d-flex align-items-center justify-content-center  '>

                            <div className="bounds position-relative" >
                                <div>
                                    <p className='p3 m-3 position-absolute'>Total Visitor</p>
                                </div>
                                < div><p className='p4  position-absolute' >{sumOfTitleNumbers}</p></div>
                            </div>


                        </div>
                        <div className=' col-4 d-flex align-items-center justify-content-center '>

                            <div className="bounds position-relative" >
                                <div>
                                    <p className='p3 m-3 position-absolute'>Total Registrations</p>
                                </div>
                                < div><p className='p4  position-absolute' >{sumOfCourseRegistrations}</p></div>
                            </div>

                        </div>
                        <div className='  col-4 d-flex align-items-center justify-content-center'>


                            <div className="bounds position-relative" >
                                <div>
                                    <p className='p3 m-3 position-absolute'>Total Payment</p>
                                </div>
                                < div><p className='p4  position-absolute' >{sumOfCourseRegistrations1}</p></div>
                            </div>






                        </div>
                    </div>
                </div>
                <div id="sectionthree">
                    <div className='row m-4 '>
                        <div className=' col-8'>

                            <div className='B1  m-3'>
                                <div className='p-3'>
                                    <div className="title "> Visitor By Continent</div>
                                    <div className=" " >

                                        <Table hover  >
                                            <thead   >
                                                <tr >
                                                    <th className='header '>Continent</th>
                                                    <th className='header '>Total Users</th>
                                                 
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                                    {titles.map((title, index) => (
                                                        <tr key={index}>
                                                            <td>{title[0]}</td>
                                                            <td>{title[1]}</td>




                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' col-4'>

                            <div className='B1  m-3  '>
                                <div className='p-3'>
                                    <div className="title2   "> Course  Registrations</div>
                                    <div className=" " >
                                        <Table hover  >
                                            <thead >
                                                <tr>
                                                    <th className='header '>Course Registrations</th>
                                                    <th className='header '>NUM</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                            {CourseRegistrations.map((CourseRegistration, index) => (
                                                        <tr key={index}>
                                                            <td>{CourseRegistration[0]}</td>
                                                            <td>{CourseRegistration[2]}</td>




                                                        </tr>
                                                    ))}
                                                
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>


                            <div className='B1  m-3 '>
                                <div className='p-3'>
                                    <div className="title2   "> Course payment</div>

                                    <div className=" " >
                                        <Table hover  >
                                            <thead >
                                                <tr>
                                                    <th className='header '>Course payments</th>
                                                    <th className='header '>NUM</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                            {CourseRegistrations.map((CourseRegistration, index) => (
                                                        <tr key={index}>
                                                            <td>{CourseRegistration[0]}</td>
                                                            <td>{CourseRegistration[1]}</td>




                                                        </tr>
                                                    ))}
                                                



                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>

                {/* <div id="sectionfour">
                     <div className='row  fixed-bottom '>
                     
                        <div className="frame">
                            <div className="textwrapper">http://value-platform.com/progamme</div>
                        </div>

                    </div> 
                </div> */}



            </div>
         </div>
        </div>


    </>)
}
export default WeeklyReport;