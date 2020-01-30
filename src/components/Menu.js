import React from 'react';
import { Table } from 'reactstrap';

const Menu = (props) => {
  return (
      <div className = 'container'>
            <Table responsive>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>Table heading</th>
                <th>Table heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td>Plates</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Hummus</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td>Juices</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
            </tbody>
            </Table>
    </div>
  );
}

export default Menu;