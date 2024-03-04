import React from "react";
import Person from "./Person";

// List Rendering - https://www.youtube.com/watch?v=5s8Ol9uw-yM

// Lists and Keys - https://www.youtube.com/watch?v=0sasRxl35_8

// Index as Key Anti-pattern - https://www.youtube.com/watch?v=xlPxnc5uUPQ&

function NameList() {
    
    const names = ['Saiful Islam', 'Muthukumar','Koodalarasan']

    // map is built-in function in javascript and also used arrow function in it
    // Below map function will pass values in names into x and then it(x) displays through h5 tag
       const NameList = names.map( x => <h5 key={x}> { x } </h5>)

    
    // In below, we can also passing index into arrow function inorder to achieve(initialise) index into key
       const NameListthroughIndexasKey = names.map( (x,index) => <h5 key={index}> { x } { index } </h5>)
    /* In above, we used key inorder to avoid warning "Warning: Each child in an array  or iterator should have 
    a unique key prop", where key is initialised with index(which is unique)  */
    
    
    
    // Array persons
    const persons=[
        {
            id:1,
            name:" Saiful Islam ",
            age:25,
            Designation:"Full Stack Developer"
        },
        {
            id:2,
            name:"Muthukumar",
            age:25,
            Designation:"Front End Developer"
        },
        {
            id:3,
            name:"Koodalarasan",
            age:25,
            Designation:"Python Web Developer"
        }
    ]
    
    // map is built-in function in javascript and also used arrow function in it
    // Below map function will passing parameter y to Component Person through as props as props_y 
    /* 
    Then Component Person will receives props_y and returns h5 tag with received data(props_y) and 
    receives by using below Person Component tag<Person props_y={y}/>.
    Inorder to understand above two line please check Person.js
    */
    const PersonList=persons.map( y => < Person key={y.id} props_y = { y } /> )
    /* In above, we used key inorder to avoid warning "Warning: Each child in an array  or iterator should have 
    a unique key prop", where key is initialised with id(which is unique) with parameter y by using dot operator  */
     
    return(
        <div>

            <h4> Displaying(Rendering) names Directly, Check NameList.js </h4>
            <h5>{names[0]}</h5>
            <h5>{names[1]}</h5>
            <h5>{names[2]}</h5> 
            
            <h4> Displaying(Rendering) names through map function, Check NameList.js </h4>  
            { NameList }

            <h4> Displaying(Rendering) names through map function by passing(initialising) index as key, Check NameList.js </h4>  
            { NameListthroughIndexasKey }
            
            <h4>Displaying(Rendering) persons through map function and Component Person, Check NameList.js and Person.js</h4>   
            { PersonList }

           
        </div>
    )
}

export default NameList