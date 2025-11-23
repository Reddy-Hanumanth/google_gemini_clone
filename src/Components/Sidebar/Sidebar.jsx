import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/Context'
const Sidebar = () => {

const [extended,setextended] = useState(false)
const {onSent,prevprompt,setrecentprompt,newchat} = useContext(Context)

const loadPrompt = async (prompt) => {
    setrecentprompt(prompt)
    await onSent(prompt)
}

  return (
    <div className='sidebar'>
        <div className="top">
             <img src={assets.menu_icon} alt="" className='menu' onClick={()=>setextended(prev => !prev)}/>
             <div className='newchat' onClick={newchat}>
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
             </div>
             {extended ?
             <div className="recent">
                <p className='recentTittle'>Recent</p>
                {prevprompt.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recentEntery">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18 )} ...</p>
                </div>
                    )
                })}
                
             </div> : null
            }
             
        </div>
        <div className="bottom"> 
            <div className="bottomItem recentEntery">
                <img src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottomItem recentEntery">
                <img src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottomItem recentEntery">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Setting</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar