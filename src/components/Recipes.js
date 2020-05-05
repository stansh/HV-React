import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, ListGroupItem, ListGroup } from 'reactstrap';
import { FadeTransform,Stagger,Fade } from 'react-animation-components';


const R1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      
               
      <Button  outline color="success" size="lg" block onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #1</Button>
      <Collapse isOpen={isOpen}>
      
        <Card >
        
          <CardBody >
              <ListGroup >
                  <ListGroupItem>Start by prepping all of your ingredients: Drain 15½ oz. chickpeas in a strainer or colander and rinse thoroughly. Let drain again while you do the other prep.</ListGroupItem>
                  <ListGroupItem>Cut 1 lemon in half, remove any visible seeds, and squeeze juice into a small bowl. You should have 3–4 Tbsp.</ListGroupItem>
                  <ListGroupItem>Smash 1 garlic clove with the flat side of your knife on a cutting board and remove peel. Continue to mash with side of knife until a paste forms. (You can also grate garlic on a microplane if you have one—you're just looking for a fine paste.)</ListGroupItem>
                  <ListGroupItem>Combine drained chickpeas, 3 Tbsp. lemon juice, garlic, ½ cup tahini, ¾ tsp. salt, 10 cracks pepper, ¼ tsp. cumin, and 2 Tbsp. water in a food processor.</ListGroupItem>
                  <ListGroupItem>Process until smooth, about 1 minute.With the motor running, stream in 3 Tbsp. oil, then continue to process until hummus is very light and creamy, about 1 minute longer. Taste and season with more salt, if needed.</ListGroupItem>
              </ListGroup>
              
          </CardBody>
          
        </Card>
       
              
      </Collapse>
        
    </div>
  );
}
const R2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #2</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                    <ListGroupItem>Add the chickpeas to your blender and make sure to reserve the liquid (it’s called aquafaba). If you forget and accidentally toss it, no worries, just use water.</ListGroupItem>
                    <ListGroupItem>Add the tahini (which I also make in my Vitamix), olive oil, fresh lemons, garlic, cumin and salt to the blender. Use two garlic cloves for your basic hummus, but if you’re a garlic lover like me, feel free to add more. Roasted garlic is also divine.</ListGroupItem>
                    <ListGroupItem>Turn your Vitamix on high and use the tamper as you would when making almond butter to push the ingredients into the blades. After 30 seconds, it should be fully blended. </ListGroupItem>
                    <ListGroupItem>Your hummus will be thick, creamy and smooth. If you’d like a thinner consistency, just add a bit more aquafaba or water until it’s your desired consistency.</ListGroupItem>
                    <ListGroupItem>To serve, add a few large, heaping spoonfuls to a plate or bowl and give it a swish depression on top. This creates a little divot for your olive oil to stay in. Then sprinkle some paprika and add fresh parsley</ListGroupItem>
                    <ListGroupItem>Scrape the hummus into a serving bowl or platter, and use a spoon to create nice swooshes on top</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

const R3 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #3</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                    <ListGroupItem>In the bowl of a food processor, combine the tahini and lemon juice and process for 1 minute, scrape the sides and bottom of the bowl then process for 30 seconds more</ListGroupItem>
                    <ListGroupItem>Add the olive oil, minced garlic, cumin, and a 1/2 teaspoon of salt to the whipped tahini and lemon juice</ListGroupItem>
                    <ListGroupItem>With the food processor turned on, slowly add 2 to 3 tablespoons of water until you reach the perfect consistency</ListGroupItem>
                    <ListGroupItem>Taste for salt and adjust as needed. Serve hummus with a drizzle of olive oil and dash of paprika</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
const R4 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #4</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                   <ListGroupItem>Add all the ingredients to your Vitamix or high-powered blender and secure the lid. Remove the lid cap and insert the tamper</ListGroupItem>
                    <ListGroupItem>Turn the blender on high for 30 seconds (or more for a creamier texture) and use the tamper to push the hummus into the blades. Add more chickpea liquid (aquafaba), if desired, for a softer hummus</ListGroupItem>
                    <ListGroupItem>Add the hummus to a serving plate and garnish with olive oil, paprika and fresh parsley.</ListGroupItem>
                    <ListGroupItem>The hummus will last for up to a week in the fridge, if kept in a sealed container. You can also freeze the hummus in sealed containers for future use, then just thaw as needed. It's actually one of the most common foods I meal prep on a regular basis as it's so easy</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}



const Recipes = () => {
  return(
    <div className ='container'>
      <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(1) translateY(-100%)'
            }}>
       <div className='row'>
       <div className='col-md-4'>
          <img width="100%" src="HV-React/images/pic30.jpg" alt="Card image cap"className='rounded'/>
        </div>
         <div className='col'>
      
             
            <R1 />
            <R2 />
            <R3 />
            <R4 />
            
     
       </div>
      
        
       
      </div>

      </FadeTransform>
      
    </div>
    
    
        
                
    
   
  );
}


export default Recipes;