import React,{useState} from 'react'
import { useNotes } from '../../context/NotesContext';
import './LabelCard.css';

function LabelCard() {
    const [ label , setLabel ] = useState('');
    const { note ,setNote ,labelArray , setLabelArray  } =useNotes();



    const labelHandler =(e)=>{
        const value = e.target.value;
        setLabel(value);
    }
    console.log(label);
    const addlabel =()=>{
                console.log("click");
                if( label !== "undefined" ){ 
                    setLabelArray([...labelArray,label]);
                    setLabel('');
                }
    }
    console.log(labelArray);

    const addToTags =(e)=>{
        console.log(e.target.value);
        const tagStatus = note.tags.includes(e.target.value);
        if(!tagStatus){
            setNote({...note,tags:[...note.tags,e.target.value]});
        }else{

            setNote({...note,tags: note.tags.filter( (item )=> item !==e.target.value )  })
        }
        console.log(tagStatus);
    }
    const [ showLabel ,setShowLabel ] = useState(false);
    const displayLabelHandler=()=>{
        if(showLabel===true){
            setShowLabel(false)
        }else{
            setShowLabel(true)
        }
    }


  return <>
  
                <div className='pos rel'>

                <button className='note-btn' onClick={displayLabelHandler}>Add Label</button>

                   { showLabel &&  <div className='label-container'>
                            <div className='label-width'>

                                <label className='flex-center flex-col ' htmlFor="add-label">
                                    Label Note:
                                    <input id='add-label' type="text" placeholder='label name...' className='label-input' value={label} onChange={labelHandler} /> 
                                </label>
                            </div>
                            <div>
                                <ul>
                                    {labelArray.map((label,index)=><li key={index}><label><input type="checkbox" checked={note.tags.includes(label)} value={label} onChange={addToTags} /> {label} </label></li>  ) }  
                                </ul>
                            </div>
                            <div >
                                <div className='cur-pointer' onClick={addlabel} > + create "{label}"</div>
                            </div>
                        </div>
                    }

                </div>

  
  </>
}

export default LabelCard;
