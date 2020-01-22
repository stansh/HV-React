import React ,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';




function RenderVenue({venue}) {
    return (
        <Card>
            
                <CardImg width="100%" src={venue.image} alt={venue.name} />
                <CardImgOverlay>
                    <CardTitle>{venue.name}</CardTitle>
                </CardImgOverlay>
           
        </Card>
    );
}





export default RenderVenue;