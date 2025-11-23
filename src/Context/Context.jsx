import { createContext, useState } from "react";
import runChat from "../Config/Gemini";


export const Context = createContext()
const ContetPrvider = (props) => {
    
    const [input,setinput] = useState ("")
    const [recentprompt,setrecentprompt] = useState("")
    const [prevprompt,setprevpromt] = useState([])
    const [showresult,setshowresult] = useState(false)
    const [loading,setloading] = useState(false)
    const [resultdata, setresultdata] = useState("")

    const delayPara = (index,nextword)=>{
        setTimeout(() => {
            setresultdata(prev => prev+nextword)
        }, 75*index);
    }

    const newchat = () => {
        setloading(false)
        setshowresult(false)
    }

    const onSent = async (prompt)=>{

        setresultdata("")
        setloading(true)
        setshowresult(true)
        let response;
        if (prompt !== undefined) {
            response = await runChat (prompt)
            setrecentprompt(prompt)
        }else{
            setprevpromt(prev => [...prev,input])
            setrecentprompt(input)
            response = await runChat(input)
        }
       
        let responseArray = response.split("**")
        let newResponse="" ;
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i%2 !== 0) {
                newResponse += responseArray[i]
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i]
            delayPara(i,nextword+ " ")            
        }
        setloading(false)
        setinput("")

    }
    
    const contextValue = {
        prevprompt,
        setprevpromt,
        onSent,
        setrecentprompt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,
        newchat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContetPrvider;


