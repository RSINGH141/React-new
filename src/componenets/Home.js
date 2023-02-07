import React  from 'react';
import {Jumbotron ,Button} from 'reactstrap'
import { useEffect } from 'react';



const Home= () => {
    useEffect(()  =>  {

        document.title="Home";},[]);
    return(
        <div style={{textAlign:'center', backgroundColor:'wheat',width: 500,border:'1px solid black'}} >
            
                <h1>Learn with RishiKesh</h1>
                <p>This is for Learning Purpose Backend  is on Sprinboot and Frontend on React js</p>
                <p>  <strong>Spring</strong> Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.</p>
                
               <Button color='primary'outline>Clicke</Button>
                </div>
    );
}
export default Home;