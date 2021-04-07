import React from 'react';
import ContentLoader from "react-content-loader";
 
 function PizzaLoader() {
    return (
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      
      >
        <circle cx="135" cy="134" r="120" /> 
        <rect x="4" y="285" rx="5" ry="5" width="260" height="22" /> 
        <rect x="5" y="318" rx="6" ry="6" width="260" height="83" /> 
        <rect x="5" y="413" rx="6" ry="6" width="260" height="41" />
      </ContentLoader>
      )
 }
 
 export default PizzaLoader;
 