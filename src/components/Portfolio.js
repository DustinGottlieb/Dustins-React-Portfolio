import React, { useState } from 'react';
import { Header } from './Header';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';


export function Portfolio() {

    const [page, setPage] = useState(<AboutMe />)


    return (
        <body>
        <div>
            <Header setPage={setPage}/>
            {page} 
        </div>
        <Footer />
        </body>

    )
}