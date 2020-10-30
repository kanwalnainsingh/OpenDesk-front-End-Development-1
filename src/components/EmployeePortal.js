import React from 'react'
import './Employee.css'

let EmployeePortal = () => {
    return (
        <React.Fragment>
            <div className="container my_d">
                <i className="fa fa-4x" id="d">d</i>
                <p className="h5 bg-my text-info" id="desk">Open Desk</p>
                <p className="h6 open_desk bg-my text-center d-inline-flex text-info">Organization Onboarding</p>
            </div>

            {/* Middle Section */}
            <section className="container">
                <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-4 mobile_screen_1">
                                    <div className="company_image">
                                        <i className="fa fa-user-alt fa-8x bg-my justify-content-center d-flex mt-2"/>
                                    </div>
                                    <p className="bg-my p_text d-flex justify-content-center">Company Logo</p>
                                </div>
                                <div className="col-md-8 mobile_screen_2">
                                    <form className="Input_element_1">
                                        <div className="form-group d-flex">
                                            <p className="h4 mr-3">Name:</p>
                                            <input type="text" className="form-control"  placeholder="Your Company name"/>
                                        </div>
                                        <div className="form-group d-flex">
                                            <p className="h4 mr-3">Location:</p>
                                            <input type="text" className="form-control"  placeholder="Choose Your Location"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
                             {/*last Section*/}
                             <section className="container mobile_screen_3">
                                 <div className="row border_top">
                                     <div className="col">
                                         <form className="p-2">
                                             <div className="form-group  d-inline-flex mr-3">
                                                 <p className="h5 mr-3">Name:</p>
                                                 <input type="text" className="form-control pr-5"  placeholder="Your Company name"/>
                                             </div>
                                             <div className="form-group d-inline-flex mr-3">
                                                 <p className="h5 mr-3">Location:</p>
                                                 <input type="text" className="form-control pr-5"  placeholder="Choose Your Location"/>
                                             </div>
                                         </form>
                                         <form className="p-2">
                                             <div className="form-group d-inline-flex">
                                                 <p className="h5 mr-3">Total Desk:</p><input type="number" className="form-control border_radius"/>
                                             </div>
                                             <div className="form-group d-inline-flex ml-3">
                                                 <p className="h5 mr-3"> Reserved:</p> <input type="number" className="form-control border_radius"/>
                                             </div>
                                         </form>
                                         <form className="p-2">
                                             <div className="ml-3">
                                                 <p className="h5 d-flex">Open Desk:
                                                     <textarea className="text_area" rows="1" cols="2"/>
                                                 </p>
                                             </div>
                                         </form>
                                     </div>
                                     <div className="btn_style">
                                         <input type="submit" className="btn btn-sm text_color" value="Save"/>
                                     </div>
                                 </div>
                             </section>
            <div className="mb-5"/>
        </React.Fragment>
    )
}

export default EmployeePortal;
