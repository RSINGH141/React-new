import React from "react";
import { List,ListGroupItem } from "reactstrap";

const Menu=()=>{
return(
<List>

           <ListGroupItem  >
           <a href="home.html"> Home</a>
           </ListGroupItem>
           <ListGroupItem>
            Addcourses
           </ListGroupItem>
           <ListGroupItem>
            Viewcourses
           </ListGroupItem>
           <ListGroupItem>
            About us
           </ListGroupItem>
           <ListGroupItem>
            Contact us
           </ListGroupItem>
</List>
);



}
export default Menu;