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

    return (
        <div className='bg-lime-50 w-full flex flex-col items-center'>
            <div className='w-11/12 rounded-lg bg-first p-3 m-3 flex flex-wrap justify-center items-center gap-3'>
                <div className='bg-of-box flex'>
                    <button className={`font-bold box ${IsBold ? 'box-active ' : ''}`} onClick={() => setIsBold(!IsBold)}>B</button>
                    <button className={`italic box ${IsItalic ? 'box-active ' : ''}`} onClick={() => setIsItalic(!IsItalic)}>i</button>
                </div>
                <div className='bg-of-box flex'>
                    <button onClick={() => setIsJustify('justify-start')} className={`font-bold box ${IsJustify === 'justify-start' ? 'box-active' : ''}`}><img src={alignLeft} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('justify-center')} className={`font-bold box ${IsJustify === 'justify-center' ? 'box-active' : ''}`}><img src={aligncenter} alt="" srcset="" /></button>
                    <button onClick={() => setIsJustify('justify-end')} className={`font-bold box ${IsJustify === 'justify-end' ? 'box-active' : ''}`}><img src={alignright} alt="" srcset="" /></button>
                </div>
                <div className='bg-of-box flex'>
                    <button onClick={() => setIsColor('bg-black')} className='colored-box bg-black'>
                        {IsColor === 'bg-black' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-red-800')} className='colored-box bg-red-800'>
                        {IsColor === 'bg-red-800' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-green-800')} className='colored-box bg-green-800'>
                        {IsColor === 'bg-green-800' ? <p className='text-white'>A</p> : ''}
                    </button>
                    <button onClick={() => setIsColor('bg-blue-800')} className='colored-box bg-blue-800'>
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
            <div>dsfdsgfdgfs</div>
        </div>
    );
};

export default AddTask;