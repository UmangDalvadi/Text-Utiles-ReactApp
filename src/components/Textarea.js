import React, { useState } from 'react'


const Textarea = (props) => {
    const [text, settext] = useState('')

    const handleonclickupper = () => {
        let up = text.toUpperCase()
        settext(up)
        props.showalert('Coverted to UpperCase', 'success ')
    }
    const handleonclicklower = () => {
        let low = text.toLowerCase()
        settext(low)
        props.showalert('Coverted to LowerCase', 'success ')

    }
    const handleonclickclear = () => {
        let clear = ""
        settext(clear)
    }
    const handleonclickcopytext = () => {
        // text.select()
        // text.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(text);
        // alert("done")
        document.getElementById('copy').innerHTML = 'Copied!'
        setTimeout(() => document.getElementById('copy').innerHTML = 'Copy to clipboard', 1500);
        props.showalert('Copied!!', 'success')

        // document.getElementById('copy').innerHTML='Copy to clipboard'
    }


    const handleonchange = (event) => {
        settext(event.target.value)
    }

    // const [mode, changemode] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    // const[btn,chbtn]=useState('Enable DarkMode')

    // // let mode={
    // //     backgroundColor:'dark',
    // //     color:'black'
    // // }

    // const handleonclickmode = () => {
    //     if (mode.color === "black") {
    //         changemode({
    //             backgroundColor: 'black',
    //             color: 'white',
    //         })
    //         chbtn('Enable LightMode')
    //     }
    //     else {
    //         changemode({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         chbtn('Enable Darkmode')
    //     }
    // }

    return (
        <>
            <div className='container ' >
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }} className=''>TextUtiles - A text analizer</h2>
                <form>
                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea className="form-control" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#404f5d' }} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange} placeholder="enter your text"></textarea>
                    </div>
                </form>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleonclickupper}>Convert UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleonclicklower}>Convert LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleonclickclear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id='copy' onClick={handleonclickcopytext} >Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id='copy' onClick={handleonclickcopytext} >Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id='copy' onClick={handleonclickcopytext} >Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id='copy' onClick={handleonclickcopytext} >Copy to clipboard</button>
                {/* <button className="btn btn-primary " onClick={handleonclickmode} >{btn}</button> */}
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h3>
                    Your text summery
                </h3>
                <p>{text.split(" ").filter((txt) => { return txt.length !== 0 }).length} Words, {text.length} characters, {text.split(/\r\n|\r|\n/).filter((txt) => { return txt.length !== 0 }).length} Lines</p>
                <p>Avg {0.008 * (text.split(" ").filter((txt) => { return txt.length !== 0 }).length)} Minuts to read it!</p>
            </div>
        </>
    )
}

export default Textarea


