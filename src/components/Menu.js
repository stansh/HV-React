import React from 'react';
import {Table} from 'reactstrap';


const MENU = [
    {  
        id: 0,
        size: 'Small',
        description: '2 choices of hummus, 2 choices of veggies, 2 pitas',
        price: '$ 6.99'   
    },
    {  
        id: 1,
        size: 'Medium',
        description: '3 choices of hummus, 4 choices of veggies, 3 pitas',
        price: '$ 8.99'   
    },{  
        id: 2,
        size: 'Large',
        description: '5 choices of hummus, 5 choices of veggies, 5 pitas',
        price: '$11.99'   
    },{  
        id: 3,
        size: '32 oz Container of Hummus',
        description: '',
        price: '$24.99'   
    },{  
        id: 4,
        size: '22 oz Container of Hummus',
        description: '',
        price: '$18.99'   
    },{  
        id: 5,
        size: '32 oz Jar of Fesh Juice',
        description: '',
        price: '$12.99'   
    },{  
        id: 6,
        size: '16 oz Jar of Fesh Juice',
        description: '',
        price: '$5.99'   
    },{  
        id: 7,
        size: 'Large',
        description: '',
        price: '$7.99'   
    },{  
        id: 8,
        size: 'Medium',
        description: '',
        price: '$6.99'   
    },{  
        id: 9,
        size: 'Snmall',
        description: '',
        price: '$4.99'   
    }
    

];



function Menu () {
    const list = MENU.map(line =>{
        return (
            <div key ={line.id} className="container">
                <Table className = "table table-striped">
                    <tr>
                    <td >{line.size}</td>
                    <td >{line.description} </td>
                    <td >{line.price}</td>
                    </tr>
                </Table>
            </div>
        );
    });

    return (
       <div>{list}</div>
    )
}




export default Menu;

{/* <Table responsive  >
<tbody>

    <tr className="menuSegment text-white">
        <th><h4>Plates</h4></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <th>Small </th>
        <td>2 choices of hummus, 2 choices of veggies, 2 pitas  </td>
        <td className="prices">$ 6.99</td>
        
    </tr>
    <tr>
        <th>Medium</th>
        <td>3 choices of hummus, 4 choices of veggies, 3 pitas  </td>
        <td className="prices">$ 8.99</td>
        
    </tr>
    <tr>
        <th>Large</th>
        <td>5 choices of hummus, 5 choices of veggies, 5 pitas  </td>
        <td className="prices">$11.99</td>    
    </tr>

    
    <tr className="menuSegment text-white">
        <th><h4>By Weight</h4></th>
        <th></th>
        <th></th>
    </tr> 

    
    <tr>
        <th >Juices</th>
        <td>32 oz jar of fesh juice</td>
        <td className="prices">$12.99</td>
    </tr>       
    <tr className="menuSegment text-white">
        <th ><h4>Juices</h4></th>
        <th></th>
        <th></th>
        
    </tr>
    <tr>
        <th>Medium</th>
        <td></td>
        <td className="prices">$4.99</td>
    </tr>
    <tr>
        <th>Large</th>
        <td></td>
        <td className="prices">$6.99</td>
    </tr>
    <tr>
        <th>Virgin Bloody Mary</th>
        <td></td>
        <td className="prices">$7.99</td>
    </tr>

</tbody>

</Table> */}