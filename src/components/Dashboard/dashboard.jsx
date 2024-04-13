import React, { useEffect, useState } from 'react';
import "../Dashboard/dashboard.css"
const SomeComponent = ({ username }) => {
    return (
        <div className='userdiv'>
            <div className='info'>
              <div className='userName'>
               Username: &nbsp;<input className="inputfield" value={username} disabled/> <button>Edit</button>
               </div>

            </div>
        </div>
    );
};

export default SomeComponent;
