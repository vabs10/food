import React from 'react'
import Common from "./Common";
import service from "./image/service.png";
import Card from "./Card";
import Cdata from "./Cdata";


function Services() {
    return (
        <div>
            <Common
                start="Enjoy Food With"
                name="My Foodie Kismat"
                des="Don't Hesesitate 😅"
                btn="Explore"
                img={service}
            />
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
                <div className="container-fluid  mb-5" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {
                                    Cdata.map((val, ind) => {
                                        return <Card
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            key={ind}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;



