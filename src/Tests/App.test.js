import {render,screen,cleanup} from '@testing-library/react';
import App from '../App';
import Error from '../components/Error'
import  ReactDOM from 'react-dom';
import react from 'react';
import {isTSAnyKeyword } from '@babel/types';

import 'jest-canvas-mock';

afterEach(()=>{
    cleanup();
});


test ('searchbox should be in screen',()=>{
    render(<App/>);
    const searchkabox=screen.getByTestId("searchkabox");
    expect (searchkabox).toBeInTheDocument;  
} )




test ('main_heading',()=>{
    render(<App/>);
    const main_heading=screen.getByTestId("main_heading");
    expect (main_heading).toBeInTheDocument;
} )

test ('footer',()=>{
    render(<App/>);
    const footer=screen.getByTestId("footer");
    expect (footer).toBeInTheDocument;
    

} )

test ('footerText',()=>{
    render(<App/>);
    const footerText=screen.getByTestId("footerText");
    expect (footerText).toBeInTheDocument;
    
    

} )



test ('error existance verification',()=>{
    render(<Error/>);
    const error=screen.getByTestId("error");
    expect (error).toBeInTheDocument;
} )





