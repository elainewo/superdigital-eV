import React from 'react';
import Snake from './Snake';
import './afterfooter.css';


const AfterFooter = () => {
    return (
        <section className="afterfooter" >
            <Snake
                delay={1}

                text={"Superdigital e.V!"}
                fontSize={"5rem"}
            />
        </section>
    );
}

export default AfterFooter;