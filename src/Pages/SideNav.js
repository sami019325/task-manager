import React, { useState } from 'react';
import './../Native.css'
import editSVG from './../resources/fi_edit-3.svg'
import editNSVG from './../resources/fi_edit-3_black.svg'
import myTaskSVG from './../resources/my_task.svg'
import myTaskNSVG from './../resources/my_task_black.svg'
import CompletedkSVG from './../resources/completed_task.svg'
import CompletedkNSVG from './../resources/completed_task_black.svg'
import DetailSVG from './../resources/fi_slack.svg'
import DetailNSVG from './../resources/fi_slack_black.svg'
import { Link } from 'react-router-dom';
const SideNav = () => {
    const [isMouse1, setIsMouse1] = useState(false)
    const [isMouse2, setIsMouse2] = useState(false)
    const [isMouse3, setIsMouse3] = useState(false)
    const [isMouse4, setIsMouse4] = useState(false)
    const [clickedBtn, setClickedBtn] = useState(1)

    return (
        <div className='hidden lg:flex bg-first relative left-0 bottom-0 w-80 p-5 flex-col gap-3 h-12/12'>
            <Link to='/' className='task-options cursor-pointer flex items-center px-5 gap-3' onClick={() => setClickedBtn(1)} onMouseEnter={() => setIsMouse1(true)} onMouseLeave={() => setIsMouse1(false)}>
                <img className='' src={isMouse1 || clickedBtn === 1 ? editSVG : editNSVG} alt="" srcset="" />
                <h2 className={`${isMouse1 || clickedBtn === 1 ? 'addtask' : ''} w-full text-left font-bold`}>Add task </h2>
            </Link>
            <Link to='/showtask' className='task-options cursor-pointer flex items-center px-5 gap-3' onClick={() => setClickedBtn(2)} onMouseEnter={() => setIsMouse2(true)} onMouseLeave={() => setIsMouse2(false)}>
                <img src={isMouse2 || clickedBtn === 2 ? myTaskSVG : myTaskNSVG} alt="" srcset="" />
                <h2 className={`${isMouse2 || clickedBtn === 2 ? 'addtask' : ''} w-full text-left font-bold `}>My Task </h2>
            </Link>
            <Link className='task-options cursor-pointer flex items-center px-5 gap-3' onClick={() => setClickedBtn(3)} onMouseEnter={() => setIsMouse3(true)} onMouseLeave={() => setIsMouse3(false)}>
                <img src={isMouse3 || clickedBtn === 3 ? CompletedkSVG : CompletedkNSVG} alt="" srcset="" />
                <h2 className={`${isMouse3 || clickedBtn === 3 ? 'addtask' : ''} w-full text-left font-bold `}>Completed task </h2>
            </Link>
            <Link to='/details' className='task-options cursor-pointer flex items-center px-5 gap-3' onClick={() => setClickedBtn(4)} onMouseEnter={() => setIsMouse4(true)} onMouseLeave={() => setIsMouse4(false)}>
                <img src={isMouse4 || clickedBtn === 4 ? DetailSVG : DetailNSVG} alt="" srcset="" />
                <h2 className={`${isMouse4 || clickedBtn === 4 ? 'addtask' : ''} w-full text-left font-bold`}>Details </h2>
            </Link>

        </div>
    );
};

export default SideNav;