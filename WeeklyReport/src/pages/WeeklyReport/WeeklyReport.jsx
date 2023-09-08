import logoImg1 from '../../assets/logoImg1.png';
import logoImg2 from '../../assets/logoImg2.png';
import logoImg3 from '../../assets/logoImg3.png';
import Table from 'react-bootstrap/Table';
import './WeeklyReport.css';
import Stack from 'react-bootstrap/Stack';
function WeeklyReport() {

    return (<>
        <div>
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


            <div className='row m-4'>
                <div className=' col-4 d-flex align-items-center justify-content-center  '>

                    <div className="bounds position-relative" >
                        <div>
                            <p className='p3 m-3 position-absolute'>Total Visitor</p>
                        </div>
                        < div><p className='p4  position-absolute' >405</p></div>
                    </div>


                </div>
                <div className=' col-4 d-flex align-items-center justify-content-center '>

                    <div className="bounds position-relative" >
                        <div>
                            <p className='p3 m-3 position-absolute'>Total Registrations</p>
                        </div>
                        < div><p className='p4  position-absolute' >3</p></div>
                    </div>

                </div>
                <div className='  col-4 d-flex align-items-center justify-content-center'>


                    <div className="bounds position-relative" >
                        <div>
                            <p className='p3 m-3 position-absolute'>Total Payment</p>
                        </div>
                        < div><p className='p4  position-absolute' >0</p></div>
                    </div>






                </div>
            </div>


            <div className='row m-4 '>
                <div className=' col-8'>

                    <div className='B1  m-3'>
                        <div className='p-3'>
                        <div className="title   "> Visitor By Continent</div>
                        <div className=" " >
                            
                            <Table striped hover  >
                                <thead >
                                    <tr>
                                        <th>Continent</th>
                                        <th>NUM</th>
                                        <th>Continent</th>
                                        <th>NUM</th>
                                        <th>Continent</th>
                                        <th>NUM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ASIA</td>
                                        <td>76</td>
                                        <td>AFRICA</td>
                                        <td>39</td>
                                        <td>OCEANIA</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>EUROPE</td>
                                        <td>131</td>
                                        <td>N.AMERICA</td>
                                        <td>142</td>
                                        <td>S.AMERICA</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>ASIA</td>
                                        <td>76</td>
                                        <td>AFRICA</td>
                                        <td>39</td>
                                        <td>OCEANIA</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>EUROPE</td>
                                        <td>131</td>
                                        <td>N.AMERICA</td>
                                        <td>142</td>
                                        <td>S.AMERICA</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>EUROPE</td>
                                        <td>131</td>
                                        <td>N.AMERICA</td>
                                        <td>142</td>
                                        <td>S.AMERICA</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>EUROPE</td>
                                        <td>131</td>
                                        <td>N.AMERICA</td>
                                        <td>142</td>
                                        <td>S.AMERICA</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>EUROPE</td>
                                        <td>131</td>
                                        <td>N.AMERICA</td>
                                        <td>142</td>
                                        <td>S.AMERICA</td>
                                        <td>6</td>
                                    </tr>
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
                            <Table striped hover  >
                                <thead >
                                    <tr>
                                        <th>Course Registrations</th>
                                        <th>NUM</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Course 1 Registrations</td>
                                        <td>76</td>

                                    </tr>
                                    <tr>
                                        <td>Course 2 Registrations</td>
                                        <td>1</td>

                                    </tr>



                                </tbody>
                            </Table>
                        </div>
                        </div>
                    </div>


                    <div className='B1  m-3 '>
                    <div className='p-3'>
                        <div className="title2   "> Course payment</div>
                        <div className=" " >
                            <Table striped hover  >
                                <thead >
                                    <tr>
                                        <th>Course paymentns</th>
                                        <th>NUM</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Course 1 Course payment</td>
                                        <td>0</td>

                                    </tr>
                                    <tr>
                                        <td>Course 2 Course payment</td>
                                        <td>0</td>

                                    </tr>



                                </tbody>
                            </Table>
                        </div>
                        </div>
                        
                    </div>



                </div>
            </div>



            <div className='row   '>
                <div className="frame">
                    <div className="textwrapper">http://value-platform.com/progamme</div>
                </div>

            </div>

            {/* <div className='row m-5 d-flex position fixed  '>
  <Stack direction="horizontal" gap={4}>
  <div className="p-2"><img src={logoImg3} alt="Logo3" /></div>
  
  <div className="p p-2  ">
    <p className="p1 ">Weekly Report</p>
    <p className="p2 "><span>From</span> 31 / 8/ 2023 <span>To</span>  6/9/2023  </p>
  </div>
  
  <div className="p-2 ms-auto">
    <img src={logoImg1} alt="Logo1" />
  </div>
  
  <div className="p-2"><img src={logoImg2} alt="Logo2" /></div>
</Stack>
</div> */}




        </div>


    </>)
}
export default WeeklyReport;
