
import React from 'react'

import CreateNoteCard from '../../components/card/CreateNoteCard';


export const  MyNotes=()=> {

  return<>
          {/* <div className='wd-100' >
                  <div className='flex-center flex-col height-100 grey-shade' >
                    <div> <CgNotes size={"10rem"} /> </div>
                    <div> <h2>Notes you add appear here </h2> </div>
                  </div>      

          </div> */}
          <div  className="wd-100 " >

            <CreateNoteCard/>
            
          </div>
  </>
}

