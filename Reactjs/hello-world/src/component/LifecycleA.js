import React, {Component} from "react";
import LifecycleB from "./LifecycleB";

// Component Lifecycle Methods - https://www.youtube.com/watch?v=qnN_FuFNq2g
// Component Mounting Lifecycle Methods - https://www.youtube.com/watch?v=KDXZibVdiEI
// Component Updating Lifecycle Methods - https://www.youtube.com/watch?v=DyPkojd1fas


/* 

In React.js, components go through a series of lifecycle methods during their existence. These methods provide hooks 
that allow you to run code at particular points in the component's lifecycle. The lifecycle can be divided into 
several main phases: Mounting, Updating, and Unmounting, Error Handling.

Here are the main lifecycle methods:

Mounting Lifecycle Method is a phase of lifecycle method in ReactJS and it's when an instance of a component 
   is being created and inserted into the DOM.
   
   Mounting phase has four methods such as 
            1)constructor, 
            2)static getDerivedStateFromProps,
            3)render 
            4)componentDidMount.


1) constructor(props)->1.1) It is a special function that will get called whenever a new component is created.
                       1.2) constructor used for initialising state or binding the event handlers for to the class instance.
                       1.3) Don't do - Never make HTTP Request from within constructor
                       1.4) Must do call special function called super(props) and this will call base class constructor


2) static getDerivedStateFromProps(props,state)->2.1) This Method basically used when the state of the component depend on
                                                      changes in props over time.
                                                 2.2) When initial state of component depends on the props being passed to
                                                      component, in such scenarios use the method setstate
                                                 2.3) It is static and so unable to use this keyword instead return an object
                                                      that represents the new state of the component
                                                 2.4) Don't do - Never make HTTP Request from within constructor


3) render()->3.1) render method only required method in class component
             3.2) render method reads props & state and return JSX
             3.3) render function is pure function for given props & state it should always return same UI.
             3.4) Do not change state or interact with DOM or make ajax calls.
             3.5) Since it's render method jsx which also contains other children components right after the parent render 
                  method, Children components lifecycle methods are also executed.


4) componentDidMount()->4.1) Invoked immediately after a component and all its children components have been rendered to
                             the DOM.
                        4.2) It cause side effects. For Ex: Interact with the DOM or perform any ajax calls to load data.



Updating Lifecycle Method is when components called re-rendered because of changes to either props or state.

There are five methods now we study about that methods such as
            1) static getDerivedStateFromProps(props,state)->1.1) This is static  method which receives props and state as
                                                                  parameter and has to return either null or an object that
                                                                  represents the updated state of the component.
                                                            1.2) This method is called everytime a component is re-rendered.
                                                            
                                                            1.3) Don't do - Never make HTTP Request 
            
            2) shouldComponentUpdate()->2.1) This method receives updated props and state
                                        2.2) It Dictates if the component should re-render or not
                                        2.3) Basically for Performance Optimization
                                        2.4) Don't do - Never make HTTP Requests Calling the setState Method
            
            3) render()->3.1) render method only required method in class component
                         3.2) render method reads props & state and return JSX
                         3.3) render function is pure function for given props & state it should always return same UI.
                         3.4) Do not change state or interact with DOM or make ajax calls.
            
            4) getSnapshotBeforeUpdate(prevProps,prevState)->4.1) This method accepts prevProps,prevState as parameter 
                                                                  and is called right before the changes from the Virtual
                                                                  DOM are to be reflected in the DOM.
                                                            4.2) This rarely method use to capture some information from 
                                                                 the DOM, For Ex: you can read scroll position after the
                                                                 update maintain that scroll position by performing some
                                                                 calculations.
                                                            4.3) This method will either return null or a value. Returned
                                                                 value will be passed as the third parameter to the next
                                                                 method.  
                                                    
            5) componentDidUpdate(prevProps,prevState,snapshot)->5.1) This method called after the render is finished in
                                                                      the re-render cycles.
                                                                 5.2) It has three parameters suchas prevProps,prevState,
                                                                      snapshot, snapshot value will returned from 
                                                                      getSnapshotBeforeUpdate()
                                                                 5.3) It cause side effects
                                                    
    */
 
class LifecycleA extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            name:"Koodalrasan learned React by Vishwas"
        }
        console.log("Lifecycle-A constructor")
    }

    static getDerivedStateFromProps(props,state) 
    {
        console.log("Lifecycle-A getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle-A componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle-A shouldComponentUpdate")
        return true

    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecycle-A getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle-A componentDidUpdate")
    }
    
    changeState = () => {
        this.setState({
            name:"Python Web Developer"
        })
    }
    
    render()
    {
        
            console.log("Lifecycle-A render")
            return ( 
                
                <div>
                
                Lifecycle-A, Now Check Your Browser Console & refer LifecycleA.js for coding
                <br></br>
                <button onClick = { this.changeState }>Click to change state & Check Browser Console</button>
                <LifecycleB/> 
                
                </div>
                
                )
        
    }
}

export default LifecycleA



/*

Unmounting Phase Method

   Unmounting Phase Method is have only one method that is componentWillUnmount().
   componentWillUnmount()->1) This method invoked immediately before a component is unmounted and destroyed.
                           2) This method perform cleanup tasks like cancelling any network requests, removing event 
                              handlers, cancelling any subscriptions and also invidating timers from set timer or 
                              set interval.
                           3) Don't do - Do not call the setState Method because component is never re-rendered after it 
                           has been unmounted so component will unmount perform necessary cleanup and don't call setState.
 
                              
Error Handling Phase Method
    
    Error Handling Phase Method is have three methods

    1)static getDerivedStateFromError(error),2)componentDidCatch(error,info)->When there is an error either during rendering,
    in a lifecycle method, or in the constructor of any child component.


*/
