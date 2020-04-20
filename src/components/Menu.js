import React from 'react';
import {Table} from 'reactstrap';
import { MENU } from '../shared/menu';
import { connect } from 'react-redux';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const mapStateToProps = state =>  {
    return {
      menu: state.menu 
    };
   
  };



function Menu () {
    
    
    const list = MENU.map(line =>{
        
        return (
            
            <Fade in key ={line.id}>
            <div>
                
                <Table className = 'table table-striped ' >
                    <tbody className = 'text-center'>
                    <tr className = 'row'>
                    <td className = 'col'>{line.size}</td>
                    <td className = 'col'>{line.description} </td>
                    <td className = 'col'>{line.price}</td>
                    </tr>
                    </tbody>
                </Table>
                
            </div>
            </Fade>
            
           
        );
       
        
    });

    return (
        
       <div> <h3 className='text-center '>Our Menu</h3>{list}</div>
       
    )
}




export default connect(mapStateToProps)(Menu);

/* const MENU = [
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
    

]; */