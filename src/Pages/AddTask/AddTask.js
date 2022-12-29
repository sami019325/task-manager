import React, { useState } from 'react';
import './AddTask.css'
import alignLeft from './../../resources/u_align-left.svg'
import aligncenter from './../../resources/u_align-center.svg'
import alignright from './../../resources/u_align-right.svg'
import insertImg from './../../resources/u_image-plus.png'

const AddTask = () => {
    const [IsColor, setIsColor] = useState('bg-black')
    const [IsJustify, setIsJustify] = useState('bg-black')
    const [IsBold, setIsBold] = useState(false)
    const [IsItalic, setIsItalic] = useState(false)
    let sami = `<h1 style='color:red'>sami Ahmed</h1>`
    const [text, setText] = useState(` `)
    // const addValue = (value) => {
    //     // document.getElementById("textArea").innerHTML = 'html';
    // }
    // addValue()
    // function createMarkup() {
    //     const words = <h1 className='px-5 py-2 font-bold text-2xl w-11/12'>sami Ahmed</h1>;
    //     return words
    // }
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
        console.log(words)
    }

    return (
        <div className='bg-lime-50 w-full flex flex-col items-center'>
            <div className='w-11/12 rounded-lg bg-first p-3 m-3 flex flex-wrap justify-center items-center gap-3 select-none'>
                <div className='bg-of-box flex'>
                    <button className={`font-bold box ${IsBold ? 'box-active ' : ''}`} onClick={() => setIsBold(!IsBold) + createBold(IsBold)}>B</button>
                    <button className={`italic box ${IsItalic ? 'box-active ' : ''}`} onClick={() => setIsItalic(!IsItalic) + createItalic(IsItalic)}>i</button>
                </div>
                <div className='bg-of-box flex'>
                    <button onClick={() => setIsJustify('justify-start')} className={`font-bold box ${IsJustify === 'justify-start' ? 'box-active' : ''}`}><img src={alignLeft} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('justify-center')} className={`font-bold box ${IsJustify === 'justify-center' ? 'box-active' : ''}`}><img src={aligncenter} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('justify-end')} className={`font-bold box ${IsJustify === 'justify-end' ? 'box-active' : ''}`}><img src={alignright} alt="" srcset="" /></button>
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
                <div className='bg-of-box flex'>
                    <img className='font-bold box' src={insertImg} alt="" srcset="" />
                    <input type='file' accept='image/png, image/jpg, image/gif, image/jpeg' className='hidden' />

                </div>


            </div>
            <form className='bg-stone-300 w-11/12 p-3 rounded-lg flex flex-col items-center'>
                <input className='px-5 py-2 font-bold text-2xl w-11/12' max='10' placeholder='Write title ' type="text" />
                <div id='textArea' className={`px-5 py-2 w-11/12 mt-2 pb-52 bg-white ${IsJustify === 'justify-start' ? 'text-left' : ''} ${IsJustify === 'justify-center' ? 'text-center' : ''} ${IsJustify === 'justify-end' ? 'text-right' : ''}`} contentEditable={true} dangerouslySetInnerHTML={{ __html: text }} onKeyUp={() => renderText()}>
                    {/* /append child/ */}
                </div>
            </form>
        </div>
    );
};

export default AddTask;