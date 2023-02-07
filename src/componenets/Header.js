import React from 'react';
import { Card,CardBody } from 'reactstrap';

function Header({name,title}){
return(
<div> 
    <Card  style={{background:'yellowgreen'   }}>
             <CardBody>
           <h1 style={{textAlign:'center'}}>welcome to courses</h1>
            </CardBody>

    </Card>
   
   
</div>
);
}
export default Header;