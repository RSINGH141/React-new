import React,{Fragment,useEffect} from "react";
import  { Container, Form,FormGroup,Button } from "reactstrap";



const Addcourses=() =>{
useEffect(()  =>  {

   document.title="Add courses";},[]);

 return (
 <Fragment>
  <div  style={
    {
     border: '1px solid black'
    }
  }>
<h1>Fill the Details</h1>
    <Form>
           <FormGroup>
            <label >Course Id</label><br/>
            <input type="text"
            placeholder="Enter here"
            name="user Id"
            ></input>
<br/>

<label >Course title </label><br/>
            <input type="text"
            placeholder="Enter here"
            name="user Id"
            ></input>
   <br/>     

<label >Course Description</label><br/>
            <input type="text"
            placeholder="Enter here"
            name="user Id"
           style={{height:'200'}}
            />
<br/>
            
           </FormGroup>
           <Container>
           <Button style={{background:"green"   }}>Addcourses</Button>
        <Button style={{marginLeft: '2px',color:"warning ",background:"red"}}>clear</Button>
           </Container>
    </Form>
    </div>
</Fragment>

 );
}
export default Addcourses;