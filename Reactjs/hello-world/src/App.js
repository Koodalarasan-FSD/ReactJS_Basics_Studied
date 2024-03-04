import logo from './logo.svg';
import './App.css';
import React,{useReducer} from 'react';

//Below Component Files executed without using Hooks Concept
import Greet  from './component/Greet';
import  Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import './appStyles.css';
import styles from './component/appStyles.modules.css';   // styles is import statement variable name
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';
import FragmentDemo from './component/FragementDemo';
import Table from './component/Table';
import PureComp from './component/PureComp';
import ParentComp from './component/ParentComp';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import ForwardRef_ParentInput from './component/ForwardRef_ParentInput';
import Portaldemo from './component/Portaldemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User';
import WithCounterTwo from './component/WithCounterTwo';
import { UserProvider } from './component/UserContext';
import ComponentC from './component/ComponentC';
import PostList from './component/PostList';
import PostForm from './component/PostForm';
import ClassCounter from './component/ClassCounter';
import ClassMouse from './component/ClassMouse';
import IntervalClassCounter from './component/IntervalClassCounter';
import ClassTimer from './component/ClassTimer';


//Below Component files executed using Hooks Concept
import Hookcounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import HookCounterusinguse_effect from './component/HookCounterusinguse_effect';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import ComponentFirst from './component/ComponentFirst';
import ComponentUseContext from './component/ComponentUseContext';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import CounterThree from './component/CounterThree';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';
import ParentComponentOne from './component/ParentComponentOne';
import CounteruseMemo from './component/CounteruseMemo';
import FocusInput_useRef from './component/FocusInput_useRef';
import HookTimer from './component/HookTImer';
import DocTitleOne from './component/DocTitleOne';
import DocTitleTwo from './component/DocTitleTwo';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';
import UserForm from './component/UserForm';



// ReactJS Playlist - https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&pp=iAQB

// How to Create React Folder -- https://www.youtube.com/watch?v=9hb_0TZ_MVI




export const UserContext=React.createContext()
export const ChannelContext=React.createContext()


function App() {
  
  return (
    
    <div className="App">
      
      {/*<Hookcounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterusinguse_effect/>
      */}

      {/*<IntervalClassCounter/>
      <IntervalHookCounter/>*/}

      
      {/*<DataFetchingOne/>
      <DataFetchingTwo/>*/}

      
      
      {/*<ClassTimer/>
      <HookTimer/>*/}

      {/*<DocTitleOne/>
      <DocTitleTwo/>*/}

      {/*<Counter1/>
      <Counter2/>*/}

      <UserForm/>
      
      {/*<UserContext.Provider value={'Koodalarasan'}>
        <ChannelContext.Provider value={'Python Web Developer'}>
          <ComponentFirst />
          <ComponentUseContext/>
        </ChannelContext.Provider>
    </UserContext.Provider>*/}

      
      {/*<CounterOne/>
        <CounterTwo/>
        <CounterThree/>*/}

      
      {/*<HookMouse />*/}

      
      

     {/* <UserProvider value="Koodalarasan">
        <ComponentC/>
      </UserProvider> */} 

    {/*<WithCounterTwo render={ (count,incrementcount) => (<ClickCounterTwo count={count} incrementcount={incrementcount} />) }/>
    <WithCounterTwo render={ (count,incrementcount) => (<HoverCounterTwo count={count} incrementcount={incrementcount} />) }/> */}
    
    
    {/* We are using Ternary Operator, If isLoggedIn(parameter) which is within(inside) function is true it shows Koodalarasan 
    or else shows Guest, value(true,false) of isLogggedIn comes from User.js  
    <User name={ (isLoggedIn) => isLoggedIn ? "Koodalarasan, Refer User.js" : "Guest, Refer User.js" }/>  */}



    {/* <ClickCounter name="Koodalarasan" />
        <HoverCounter name="Koodalarasan" />  */}
     
     {/* 
      ErrorBoundary will shows(fallback UI-i.e output(UI) under the error) error but you can closes by click X in 
      right corner to see outputs of heroName & result in it.
      <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>*/}
    
      
      
      {/* Initialising primary as false and passed with(to) Component StyleSheet 
      <StyleSheet primary={true}/>

      <Inline />*/}

      {/* CSS Modules - Inlines 
      <h1 className='error'>Error - CSS Modules, Check appStyles.css and App.js</h1>
      <h1 className={styles.success}>Success - CSS Modules, Check appStyles.modules.css and App.js</h1>*/}
      
      

      {/*<ParentComponentOne/>
      <DataFetching/>
      <MouseContainer />
      <ClassMouse />
      <ClassCounter />
      <ClickCounter />
      <PostForm />
      <PostList />
      <Message/>
      <Portaldemo />
      <ForwardRef_ParentInput />
      <FocusInput />
      <RefsDemo />
      <FragmentDemo />
      <Table />
      <ParentComp />
      <LifecycleA />
      <Form />
      <NameList />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick/>
      <Counter/>
      <FocusInput_useRef/>
      <UserGreeting />
      <CounteruseMemo/>
      <Greet name="Saiful Islam" heroName="Full Stack Developer"><p>Just Testing, Check Greet.js</p></Greet>
      <Greet name="Muthu Kumar" heroName="Front End Developer" ><button>Click Here</button></Greet>
      <Greet name="Koodalarasan" heroName="Python Web Developer" />
      <Welcome name="Saiful Islam" heroName="Full Stack Developer" />
      <Welcome name="Muthu Kumar" heroName="Front End Developer"/>
      <Welcome name="Koodalarasan" heroName="Python Web Developer"/>*/}
      {/*<Hello /> */}
    </div>
  );
}

export default App;

