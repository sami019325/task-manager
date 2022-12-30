import React, { useState, useRef, useContext } from 'react';
import './AddTask.css'
import alignLeft from './../../resources/u_align-left.svg'
import aligncenter from './../../resources/u_align-center.svg'
import alignright from './../../resources/u_align-right.svg'
import insertImg from './../../resources/u_image-plus.png'
import { ContextData } from '../SharedRoute';

const AddTask = ({ onFileSelect }) => {
    const [IsColor, setIsColor] = useState('bg-black')
    const [IsJustify, setIsJustify] = useState('text-left')
    const [IsBold, setIsBold] = useState(false)
    const [IsItalic, setIsItalic] = useState(false)
    const [ImageURL, setImageURL] = useState('')
    // const [TextJustify, setTextJustify] = useState('text-')
    // let sami = `<h1 style='color:red'>sami Ahmed</h1>`
    const [text, setText] = useState(` `)
    const { user } = useContext(ContextData)
    const createBold = (p) => {
        const words = document.getElementById('textArea').innerHTML;
        let ddd;
        if (!p) {
            ddd = words + `<span style='font-weight: bold'> .`
            console.log(ddd)
            setText(ddd)
        }
        else if (p) {
            ddd = words + `<span style='font-weight: 400'> .`
            console.log(ddd)
            setText(ddd)
        }

        // createMarkup()
    }
    const createItalic = (p) => {
        const words = document.getElementById('textArea').innerHTML;
        let ddd;
        if (!p) {
            ddd = words + `<span style='font-style: italic;'> .`
            console.log(ddd)
            setText(ddd)
        }
        else if (p) {
            ddd = words + `<span style='font-style: normal'> .`
            console.log(ddd)
            setText(ddd)
        }

    }
    const createColor = (p) => {
        const words = document.getElementById('textArea').innerHTML;
        let ddd;
        if (p === 'bg-black') {
            ddd = words + `<span style='color: black'> .`
            console.log(ddd)
            setText(ddd)
        }
        else if (p === 'bg-red-800') {
            ddd = words + `<span style='color: #991b1b'> .`
            console.log(ddd)
            setText(ddd)
        }
        else if (p === 'bg-green-800') {
            ddd = words + `<span style='color: #166534'> .`
            console.log(ddd)
            setText(ddd)
        }
        else if (p === 'bg-blue-800') {
            ddd = words + `<span style='color:  #1e40af'> .`
            console.log(ddd)
            setText(ddd)
        }

    }
    function createMarkup() {
        //const words = document.getElementById('textArea').innerHTML

        return { __html: text };
    }
    const renderText = () => {
        const words = document.getElementById('textArea').innerHTML
        console.log('============================', words)
        // setText(words)
    }

    const callImg = (url) => {
        const words = document.getElementById('textArea').innerHTML;
        let ddd = words + `<img src="${url}" alt="Girl in a jacket" width="500" width="100%">`
        console.log(ddd)
        setText(ddd)
    }

    const [file, setFile] = useState();
    function handleChange(e) {
        const image = e.target.files[0]
        console.log(e.target.files[0]);
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=bcef80113996f29c85cf7b9516568d38`
        // setFile(URL.createObjectURL(e.target.files[0]));
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => setImageURL(data.data.url) + callImg(data.data.url))
            .catch(err => console.error(err))
    }

    console.log('user  1---', user.email)


    /// add task functions === ==================================
    const addTask = (event) => {
        event.preventDefault();
        console.log('user  ---', user.email)
        const titleText = event.target.titleText.value;
        const email = user.email
        const detailText = document.getElementById('textArea').innerHTML;
        const textJustify = IsJustify
        const IsActive = true
        const data = { email, textJustify, titleText, detailText, IsActive }


        // const device ==============================
        console.log(data)

        fetch('https://taskbox-delta.vercel.app/insert', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <div className=' w-full flex flex-col items-center m-5'>
            <div className='w-11/12 rounded-lg bg-first p-3 m-3 flex flex-wrap justify-center items-center gap-3 select-none'>
                <div className='bg-of-box flex'>
                    <button className={`font-bold box ${IsBold ? 'box-active ' : ''}`} onClick={() => setIsBold(!IsBold) + createBold(IsBold)}>B</button>
                    <button className={`italic box ${IsItalic ? 'box-active ' : ''}`} onClick={() => setIsItalic(!IsItalic) + createItalic(IsItalic)}>i</button>
                </div>
                <div className='bg-of-box flex'>
                    <button onClick={() => setIsJustify('text-left')} className={`font-bold box ${IsJustify === 'text-left' ? 'box-active' : ''}`}><img src={alignLeft} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('text-center')} className={`font-bold box ${IsJustify === 'text-center' ? 'box-active' : ''}`}><img src={aligncenter} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('text-right')} className={`font-bold box ${IsJustify === 'text-right' ? 'box-active' : ''}`}><img src={alignright} alt="" srcset="" /></button>
                </div>
                <div className='bg-of-box flex'>
                    <button onClick={() => setIsColor('bg-black') + createColor(IsColor)} className='colored-box bg-black'>
                        {IsColor === 'bg-black' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-red-800') + createColor(IsColor)} className='colored-box bg-red-800'>
                        {IsColor === 'bg-red-800' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-green-800') + createColor(IsColor)} className='colored-box bg-green-800'>
                        {IsColor === 'bg-green-800' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-blue-800') + createColor(IsColor)} className='colored-box bg-blue-800'>
                        {IsColor === 'bg-blue-800' ? <p className='text-white'>A</p> : ''}
                    </button>
                </div>
                <div className='bg-of-box flex'>
                    <select name="box" id="font_size">
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="24">24</option>
                    </select>
                </div>

                <div className="App">
                    <input type="file" onChange={handleChange} />
                    {/* <img src={insertImg} /> */}

                </div>

            </div>
            <form onSubmit={addTask} className='bg-stone-300 w-11/12 p-3 rounded-lg flex flex-col items-center'>
                <input id='titleText' className='px-5 py-2 font-bold text-2xl w-11/12' max='10' placeholder='Write title ' type="text" />
                <div id='textArea' name='textArea' className={`px-5 py-2 w-11/12 mt-2 pb-52 bg-white ${IsJustify === 'text-left' ? 'text-left' : ''} ${IsJustify === 'text-center' ? 'text-center' : ''} ${IsJustify === 'text-right' ? 'text-right' : ''}`} contentEditable={true} dangerouslySetInnerHTML={{ __html: text }} onKeyUp={() => renderText()}>
                    {/* /append child/ */}
                </div>
                <button className='bg-blue-900 hover:bg-sky-900  text-center text-white font-bold py-3 m-2 px-10 rounded-3xl'>Add</button>
            </form>
        </div>
    );
};

export default AddTask;