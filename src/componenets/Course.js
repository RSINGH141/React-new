import React from "react";
import { Card,cardbody,cardText,container,cardFooter, Button,CardSubtitle} from "reactstrap";



const Course= (itemData) =>{
    console.log('item', itemData)
    return(
       <card>
      <cardbody>
        <CardSubtitle >{itemData.course.title}</CardSubtitle>
        <cardText>{itemData.course.Description}</cardText>
      
        <Button style={{background:"green"   }}>update</Button>
        <Button style={{marginLeft: '2px',color:"warning ",background:"red"}}>Delete</Button>
      </cardbody>
       </card>
    );
}
export default Course;