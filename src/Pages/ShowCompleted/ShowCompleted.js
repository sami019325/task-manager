import React, { useContext, useEffect, useState } from 'react';
import { ContextData } from '../SharedRoute';

const ShowCompleted = () => {
    const { user } = useContext(ContextData)
    const [mylists, setmylists] = useState([])
    useEffect(() => {
        fetch(`https://taskbox-delta.vercel.app/lists/${user?.email}`)
            .then(res => res.json())
            .then(data => setmylists(data))
    }, [user?.email])
    console.log('vvvvvvv', mylists)
    const activeLists = mylists.filter(data => data?.IsActive === false)

    //  completed task 

    const completedTask = (id) => {
        fetch(`https://taskbox-delta.vercel.app/listsneg/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const deleteTask = (id) => {
        //=====================

        console.log('delete')
        // ---------------------------------------------------
        fetch(`https://taskbox-delta.vercel.app/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5'>
            {
                activeLists.map(data => <>
                    <div className='bg-stone-300 w-full p-3 rounded-lg flex flex-col items-center'>
                        <h1 id='titleText' className='px-5 py-2 font-bold text-2xl w-11/12'>{data.titleText}</h1>
                        <div id='textArea' name='textArea' className={`px-5 py-2 w-11/12 mt-2 pb-52 ${data.textJustify}`} dangerouslySetInnerHTML={{ __html: data.detailText }}  >
                            {/* {data.detailText} */}
                            {/* /append child/ */}
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <button onClick={() => completedTask(data._id)} className='bg-slate-400 hover:bg-sky-900  text-center text-white font-bold py-3 m-2 px-10 w-full'>Restore</button>
                            <button onClick={() => deleteTask(data._id)} className='bg-slate-400 hover:bg-sky-900  text-center text-white font-bold py-3 m-2 px-10 w-full'>Delete</button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ShowCompleted;