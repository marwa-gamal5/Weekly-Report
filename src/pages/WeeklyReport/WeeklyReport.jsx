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

import { useState, useEffect } from 'react';


function WeeklyReport() {
    const [titles, setTitles] = useState([]);
    const [CourseRegistrations, setCourseRegistrations] = useState([]);
    



    const generatePDF = () => {
        const report = new JsPDF('landscape', 'pt', 'a2');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    };
     // Define a state variable to store the sum of CourseRegistration[2]
     const [sumOfCourseRegistrations, setSumOfCourseRegistrations] = useState(0);
     // Define a state variable to store the sum of title[1]
     const [sumOfTitleNumbers, setSumOfTitleNumbers] = useState(0);
     // Define a state variable to store the sum of CourseRegistration[1]
     const [sumOfCourseRegistrations1, setSumOfCourseRegistrations1] = useState(0);
 
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = () => {



        axiosInstance.post('/user/report/', { "start_date": "2022-08-27", "end_date": "2023-09-30", "token": "03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f" }, {
            headers: {
                "Authorization": `Token 03e78a4ce3fc2c15d99f831fec7b2dfd3a4a986f`,
                "Content-Type": "application/json"

            },
        })
            .then((res) => {
                console.log(res)
                setTitles(res.data.contient);
                setCourseRegistrations(res.data.course_state);
              // Calculate the sum of CourseRegistration[2]
              const sum = CourseRegistrations.reduce((acc, current) => {
                return acc + current[2];
            }, 0);

            // Set the sum in the state variable
            setSumOfCourseRegistrations(sum);

            // Calculate the sum of title[1]
            const sum2 = titles.reduce((acc, current) => {
                return acc + current[1];
            }, 0);

            // Set the sum in the state variable
            setSumOfTitleNumbers(sum2);

            // Calculate the sum of CourseRegistration[1]
            const sum3 = CourseRegistrations.reduce((acc, current) => {
                return acc + current[1];
            }, 0);

            // Set the sum in the state variable
            setSumOfCourseRegistrations1(sum3);

            })
            .catch((err) => {
                console.log("Error while fetching data:", err);
            })
    };

// // Calculate the sum of CourseRegistration[2]
// const sumOfCourseRegistrations = CourseRegistrations.reduce((acc, current) => {
//     return acc + current[2];
// }, 0);

// // Calculate the sum of title[1]
// const sumOfTitleNumbers = titles.reduce((acc, current) => {
//     return acc + current[1];
// }, 0);







    return (<>
        <div>
        
            <div id="report"  >
                <div id="sectionone">
                    <div className='row  m-5'>
                        <div className='col-2'>
                            <img src={logoImg3} alt="Logo3" />
                        </div>

                        <div className="p col-8 ">
                            <p className="p1 d-flex align-items-center justify-content-center">Weekly Report</p>
                            <p className="p2 d-flex align-items-center justify-content-center"><span>From</span> 31 / 8/ 2023 <span>To</span>  6/9/2023  </p>
                        </div>


                        <div className='col-2  d-flex align-items-center justify-content-end position-relative'>
                            <img className='logoImg1 position-absolute ' src={logoImg1} alt="Logo1" />

                            <img className='logoImg2' src={logoImg2} alt="Logo2" />
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
                                    <div className="title   "> Visitor By Continent</div>
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

                <div id="sectionfour">
                    {/* <div className='row  fixed-bottom '> */}
                    <div className='row   '>
                        <div className="frame">
                            <div className="textwrapper">http://value-platform.com/progamme</div>
                        </div>

                    </div>
                </div>



            </div>
            <button onClick={generatePDF} type="button">
                Export PDF
            </button>
        </div>


    </>)
}
export default WeeklyReport;