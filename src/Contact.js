import React, { useState } from 'react';
import Contactus from "./image/contactus.png";

function Contact() {
    const [name1, setname1] = useState({
        fname: "",
        mobileno: "",
        emailid: "",
    });
    const ondataenter = (e) => {
        const { name, value } = e.target;
        setname1((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Your Nmae:${name1.fname}  Your Mobile No:${name1.mobileno}  Your EmailId:${name1.emailid} You Submitted ur Message Sucessfully`);
    }
    return (<>
        <div className="text-center">
            <h1>Contact Us</h1>
        </div>
        <div className="col-md-6 col-10 ol-lg-6 order-1 order-lg-2 header-img mx-auto">
        <img src={Contactus} className="img-fluid animated" alt="conatct us"/>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={onSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" autoComplete="off" required id="exampleFormControlInput1" name="fname" value={name1.fname} onChange={ondataenter} placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Contact No</label>
                            <input type="number" className="form-control" autoComplete="off" required id="exampleFormControlInput1" name="mobileno" value={name1.mobileno} onChange={ondataenter} placeholder="987654321" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" autoComplete="off" required id="exampleFormControlInput1" name="emailid" value={name1.emailid} onChange={ondataenter} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea class="form-control" autoComplete="off" required id="exampleFormControlTextarea1" placeholder="Enter ypur query" rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button className='btn btn-outline-primary' type="submit">
                                Submit Query
                        </button>
                        </div>
                    </form>    
                    </div>
            </div>
        </div>
    </>
    )
}

export default Contact
