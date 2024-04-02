import React from 'react';
import '../Greeting/Greeting.css'
import SplitText from '../SplitText';

  
  const Greeting = ({isGreeting}) => {

    // const SplitText = ({ copy, role }) => {
    //     if(!isGreeting){
    //         return null
    //     } else{
    //     return (
    //       <span aria-label={copy} role={role}>
    //         {copy.split("").map((char, index) => {
    //           const style = { animationDelay: `${0.3 + index / 20}s` };
    //           return (
    //             <span aria-hidden="true" key={index} style={style}>
    //               {char}
    //             </span>
    //           );
    //         })}
    //       </span>
    //     );
    //     };
    //   };

    return (
        <>
      <h1 className='firstLine'>
        <SplitText copy="Hi, I'm James Zhao" role="heading" isGreeting={isGreeting}/>
      </h1>
       <h1 className='secondLine'>
       <SplitText copy="A passionate full-stack developer" role="heading" isGreeting={isGreeting} />
     </h1>
      <h1 className='thirdLine'>
      <SplitText copy="Committed to app development, web design, and more" role="heading" isGreeting={isGreeting}/>
    </h1>
    </>
    );
  };
  
  export default Greeting;