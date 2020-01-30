import React, { Component, useState } from 'react';
import { Media } from 'reactstrap';

const HealthThing = () => {
  return (
    <div className = 'container'>
      <div className = 'raw'>
        
          <Media >
            <div className ='col'>
              <Media left middle href="#" >
              <img src="images/pic21.jpg"  width="500" alt="Logo" />
              </Media>
            </div>
            
              <Media body  >
                <Media heading>
                  Top aligned media
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            
          </Media>
        </div>
     

        <div className = 'raw'>
        
        <Media >
          <div className ='col-md'>
            <Media left middle href="#" >
            <img src="images/pic21.jpg"  width="500" alt="Logo" />
            </Media>
          </div>
          <div className ='col-md'>
            <Media body  >
              <Media heading>
                Top aligned media
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </div>
        </Media>
      </div>
    </div>
  );
};

export default HealthThing;




















{/* <div class = "container">
            <div class="row pb-1">
                    <h3>It's not rocket science..</h3>
                </div>
                <hr>
        <div class = "row">
            <div class = "col-md">
                <img class = "rounded"  width=500px src="images/pic21.jpg" alt="">
            </div>
            <div class = "col-md">
                <div class="card" >
                    <div class="card-body" id="indexCard">
                    
                        <h3 class="card-title">Why hummus is great</h3>
                        <p class ="card-text">Hummus is typically made by blending chickpeas (garbanzo beans), tahini (ground sesame seeds), olive oil, lemon juice and garlic in a food processor. Not only is hummus delicious, but it is also versatile, packed with nutrients and has been linked to many impressive health and nutritional benefits. Hummus provides a wide variety of vitamins and minerals. It is also a great plant-based source of protein, which makes it a nutritious option for vegans and vegetarians.</p>
                    </div>
                </div>
            </div>
                
        </div>
        <div class = "row ">
                <div class = "col-sm">
                    <img class = "rounded " width=500px  src="images/pic31.jpg" alt="">
                </div>
                <div class = "col-sm">
                    <div class="card" >
                        <div class="card-body" id="indexCard">
                        
                            <h3 class="card-title mx-2" >Why is it important to eat vegetables</h3>
                            <p class ="card-text >
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Most vegetables are naturally low in fat and calories. None have cholesterol. (Sauces or seasonings may add fat, calories, and/or cholesterol.)</li>
                                    <li class="list-group-item">Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate (folic acid), vitamin A, and vitamin C.</li>
                                    <li class="list-group-item">Diets rich in potassium may help to maintain healthy blood pressure. Vegetable sources of potassium include sweet potatoes, white potatoes, white beans, tomato products (paste, sauce, and juice), beet greens, soybeans, lima beans, spinach, lentils, and kidney beans.</li>
                                    
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                    
            </div>
    </div> */}