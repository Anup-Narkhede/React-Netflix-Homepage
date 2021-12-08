import React from 'react';
import Myobj from './Myobj';
import Card from './Card';
import './App.css';
const App = () => 
{
    return (
                <>  
                    <h1 className="demod">📺 Top Netflix Series</h1>
                    {Myobj.map((val) => {
                    return(
                        
                        <div className="demod">
                            <Card
                            key     = {val.id}
                            simgsrc = {val.simgsrc}
                            stitle  = {val.stitle}
                            sname   = {val.sname} 
                            slink   = {val.slink}
                            />
                        </div>
                
                          );
                                        }
                            )
                    }
                </>
           ) ;
}

export default App; 