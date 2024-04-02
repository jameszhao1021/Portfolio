import React from 'react';


      const SplitText = ({ copy, role, isGreeting }) => {
        if(!isGreeting){
            return null
        } else{
        return (
          <span aria-label={copy} role={role}>
            {copy.split("").map((char, index) => {
              const style = { animationDelay: `${0.15 + index / 20}s` };
              return (
                <span aria-hidden="true" key={index} style={style}>
                  {char}
                </span>
              );
            })}
          </span>
        );
        };
      };

  export default SplitText;