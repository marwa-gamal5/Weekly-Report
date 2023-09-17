import logoImg1 from '../../assets/logoImg1.png';
import logoImg2 from '../../assets/logoImg2.png';
import logoImg3 from '../../assets/logoImg3.png';
import Table from 'react-bootstrap/Table';
import './WeeklyReport.css';
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { axiosInstance } from '../../network/axiosinstance';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { usePDF } from 'react-to-pdf';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import { useParams } from 'react-router-dom';

// import { useRef } from 'react';
function WeeklyReport() {
    const [srrrRrrrrrrrr , setsrrrRrrrrrrrr] = useState('')
    const {token} = useParams;
    // const history = useHistory()

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

    useEffect(() => {
        // Perform the action you want to do once here
      //  window.location.replace('http://localhost:5173/');
      }, []);
    
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



    // const options = {
    //     // default is `save`
    //     method: 'open',
       
    //     resolution: Resolution.HIGH,
    //     page: {
    //        // margin is in MM, default is Margin.NONE = 0
    //        margin: Margin.SMALL,
    //        // default is 'A4'
    //        format: 'B4',
    //        // default is 'portrait'
    //        orientation: 'landscape',
    //     },
       
       
       
    //  };
     
    //  // you can use a function to return the target element besides using React refs
    //  const getTargetElement = () => document.getElementById('content-id');
   // Function to generate the PDF
   const generatePDF = () => {
    // Create a new jsPDF instance with landscape orientation
    const doc = new jsPDF();

    // Add the content to the PDF
    // You can use doc.text, doc.image, etc. to add content
    //row one
    doc.addImage(logoImg3, 'PNG', 4, 10,); // Add Logo3 image
    doc.setFont('Poppins', '600');
    doc.setFontSize(23.054);
    doc.text(' Activity Report', 73, 18);
    doc.setFontSize(17.89);
    doc.setTextColor('#089BD9'); // Set text color to blue
    doc.text(`From ${startDate} To ${endDate}`, 55, 30);
    // doc.text('From 31 / 8/ 2023 To 6/9/2023', 110, 40);
    doc.setTextColor(0); // Reset text color to black
    doc.addImage(logoImg2, 'PNG', 185, 10, ); // Add Logo1 image
    doc.addImage(logoImg1, 'PNG', 160, 10,); // Add Logo2 image

     //row two 
// Adding "Total Visitor" section
doc.setFillColor(214, 235, 255); // Set background color
doc.rect(10,50, 60, 30, 'F'); // Draw a filled rectangle

doc.setFont('Poppins', '600');
doc.setFontSize(20);
doc.setTextColor(9, 98, 136); // Set text color to a shade of blue
doc.text('Total Visitor', 14, 62); // Add the "Total Visitor" text

doc.setFont('Inter', '1000');
doc.setFontSize(20);
doc.setTextColor(0); // Reset text color to black
doc.text(`${sumOfTitleNumbers}`, 14, 77); // Add the visitor count

// Adding "Total Registrations" section
doc.setFillColor(214, 235, 255); // Set background color
doc.rect(75,50, 60, 30, 'F'); // Draw a filled rectangle

doc.setFont('Poppins', '600');
doc.setFontSize(20);
doc.setTextColor(9, 98, 136); // Set text color to a shade of blue
doc.text('Total Registrations', 78, 62); // Add the "Total Registrations" text

doc.setFont('Inter', '1000');
doc.setFontSize(20);
doc.setTextColor(0); // Reset text color to black
doc.text(`${sumOfCourseRegistrations}`, 78, 77); // Add the visitor count

// // Adding "Total Payment" section
doc.setFillColor(214, 235, 255); // Set background color
doc.rect(140,50, 60, 30, 'F'); // Draw a filled rectangle

doc.setFont('Poppins', '600');
doc.setFontSize(20);
doc.setTextColor(9, 98, 136); // Set text color to a shade of blue
doc.text('Total Payment', 143, 62); // Add the "Total Payment" text

doc.setFont('Inter', '1000');
doc.setFontSize(20);
doc.setTextColor(0); // Reset text color to black
doc.text(`${sumOfCourseRegistrations1}`, 143, 77); // Add the visitor count


//row three

const sectionThreeYStart = 100; // Adjust this value as needed

// // Visitor By Continent
// doc.setFont('Poppins', '600');
// doc.setFontSize(18);
// doc.setTextColor(9, 98, 136);
// doc.text('Visitor By Continent', 115, sectionThreeYStart - 1);

// Visitor By Continent Table
const tableData1 = [
    ['Continent', 'Total Users'],
    ...titles.map((title) => [title[0], title[1]]),
];

const table1Options = {
    startY: sectionThreeYStart + 4,
   
    headStyles: {
        fontSize: 10,
        textColor: [0, 0, 0],
        cellPadding: 6,
        halign: 'center',
        fillColor: [244, 244, 244], // Background color for header cells
    },
    bodyStyles: {
        fontSize: 10,
        textColor: [0, 0, 0],
        cellPadding: 6,
        halign: 'center',
        fillColor: [255, 255, 255], // Background color for body cells (white)
        lineWidth: 0,
    },
    theme: 'grid',
    tableWidth: 'auto', // Adjust the width as needed
    tableHeight: 'auto', // Adjust the height as needed
};

// doc.autoTable(tableData1[0], tableData1.slice(1), table1Options);
doc.autoTable({
    head: tableData1.slice(0, 1),
    body: tableData1.slice(1),
    startY: 100,
  });
// // Course Registrations
// doc.setFont('Poppins', '600');
// doc.setFontSize(18);
// doc.setTextColor(9, 98, 136);
// doc.text('Course Registrations',115, sectionThreeYStart - 10); // Adjust vertical position

// Course Registrations Table
const tableData2 = [
    ['Course Registrations', 'NUM'],
    ...CourseRegistrations.map((CourseRegistration) => [CourseRegistration[0], CourseRegistration[2]]),
];
doc.autoTable({
    head: tableData2.slice(0, 1),
    body: tableData2.slice(1),
    startY: doc.previousAutoTable.finalY + 10,
  });

// const table2Options = {
//     startY: sectionThreeYStart + 10, // Adjust vertical position
//     // startX: 250,
//     headStyles: {
//         fontSize: 10,
//         textColor: [0, 0, 0],
//         cellPadding: 6,
//         halign: 'center',
//         fillColor: [244, 244, 244], // Background color for header cells
//     },
//     bodyStyles: {
//         fontSize: 10,
//         textColor: [0, 0, 0],
//         cellPadding: 6,
//         halign: 'center',
//         fillColor: [255, 255, 255], // Background color for body cells (white)
//         lineWidth: 0,
//     },
//     theme: 'grid',
//     tableWidth: 'auto', // Adjust the width as needed
//     tableHeight: 'auto', // Adjust the height as needed
// };

// doc.autoTable(tableData2[0], tableData2.slice(1), table2Options);

// // Course Payment
// doc.setFont('Poppins', '600');
// doc.setFontSize(18);
// doc.setTextColor(9, 98, 136);
// doc.text('Course Payment', 115, sectionThreeYStart +85); // Adjust vertical position

// Course Payment Table
const tableData3 = [
    ['Course Payments', 'NUM'],
    ...CourseRegistrations.map((CourseRegistration) => [CourseRegistration[0], CourseRegistration[1]]),
];

doc.autoTable({
    head: tableData3.slice(0, 1),
    body: tableData3.slice(1),
    startY: doc.previousAutoTable.finalY + 10,
  });
// const table3Options = {
//     startY: sectionThreeYStart + 80, // Adjust vertical position
//     // startX: 450,
//     headStyles: {
//         fontSize: 10,
//         textColor: [0, 0, 0],
//         cellPadding: 6,
//         halign: 'center',
//         fillColor: [244, 244, 244], // Background color for header cells
//     },
//     bodyStyles: {
//         fontSize: 10,
//         textColor: [0, 0, 0],
//         cellPadding: 6,
//         halign: 'center',
//         fillColor: [255, 255, 255], // Background color for body cells (white)
//         lineWidth: 0,
//     },
//     theme: 'grid',
//     tableWidth: 'auto', // Adjust the width as needed
//     tableHeight: 'auto', // Adjust the height as needed
// };

// doc.autoTable(tableData3[0], tableData3.slice(1), table3Options);
    // Save or download the PDF
    doc.save('weekly_report.pdf');
  };
    return (<>
        <div>
        <button onClick={handleSubmit}>Submit</button>
          
           
            <button onClick={generatePDF}>Generate PDF</button>
             
              <div id="content-id">
             <div id="report"  >
                <div id="sectionone">
                    <div className='  row  m-5 d-flex   align-items-center justify-content-center '>
                        <div className=' col-12 col-sm-2 mx-auto text-center '>
                        {/* <div className='col-2  '> */}
                            <img  className='logoImg3'src={logoImg3} alt="Logo3" />
                        </div>

                        <div className="  p col-12 col-sm-8 p-2 text-center">
                            <p className="p1 d-flex align-items-center justify-content-center">Activity Report</p>
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
   

                        <div className=' col-12 col-sm-2 d-flex align-items-center justify-content-center   '>
                        
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
                        <div className='col-12 col-md-8'>
                        {/*<div className='col-12 col-sm-8 '>*/}

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
                        <div className=' col-12 col-md-4'>

                            <div className='B1  m-3  '>
                                <div className='p-3'>
                                    <div className="title2"> Course  Registrations</div>
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