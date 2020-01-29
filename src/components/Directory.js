import React ,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';




function RenderDirectoryItem ({venue}) {

    return (
        <Card>
            
                <CardImg width="100%" src={venue.image} alt={venue.name} />
                <CardImgOverlay>
                    <CardTitle className="text-white ">{venue.name}</CardTitle>
                </CardImgOverlay>
           
        </Card>
    );
}

function Directory(props) {

    const directory = props.venues.map(venue => {
        return (
            <div key={venue.id} className="col-md-5 m-1 text-white">
                <RenderDirectoryItem venue={venue}  />
            </div>
        );
    });

    // if (props.campsites.isLoading) {
    //     return (
    //         <div className="container">
    //             <div className="row">            
    //                 <Loading />
    //             </div>
    //         </div>
    //     );
    // }
    // if (props.campsites.errMess) {
    //     return (
    //         <div className="container">
    //             <div className="row"> 
    //                 <div className="col">
    //                     <h4>{props.campsites.errMess}</h4>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // } 

    return (
        <div className="container">
            {/* <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div> */}
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;





