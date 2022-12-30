import React from 'react';

const Details = () => {
    return (
        <div className='p-5'>
            <h1 className='text-5xl font-bold text-center'>Demo Project </h1>

            <h2 className='font-bold'>Task  Description:</h2>
            Please make a task management tool web app with the functionalities below. For example, the Google Tasks app, etc.

            <h2 className='font-bold'>Task Details: </h2>
            You must make a responsive navbar with at least these 03 routes. Add Task, My Task, and Completed Tasks. (You can add more routes on your own if you want.)
            There will be an input field where users can add the daily tasks. After writing the tasks press the “enter” key on the keyboard to add the tasks to the My Task route. (Look at the google task app for more understanding)
            <h2 className='font-bold'>Add task section:</h2>
            User can add their task.
            Upload images option from input field (show your creativity on design)
            Add a “submit” button. After uploading and adding some text in the field, when submit button is clicked. The text will be added to the media route.

            <h2 className='font-bold'>My task section:</h2>
            Users can see there all their tasks.
            Users can Update and delete their tasks.
            There will be a "Completed" button beside the added Task, And after clicking the "Completed' button, it lets you go on the Completed task route.

            <h2 className='font-bold'>Completed task section:</h2>
            <ul>
                <li className='list-item'>User can Delete their completed task.</li>
                <li className='list-item'>There will be a "Not Completed" button beside the Completed Task, And after clicking the "Not Completed' button, it lets you go on my task route.</li>
                <li className='list-item'>There will be a comment section for each task that is completed.</li>
            </ul>



            <h2 className='font-bold text-lg'>Bonus point: Apply Dark mood for the whole website.</h2>


            <h2 className='font-bold'>Authentication:</h2>
            To view the details when the “details” button is clicked, the user has to be registered. In this case,
            Enable google sign-in and email sign-in.
            Register a new user by email and password.



            <h2 className='font-bold'>Required technology:</h2>
            What you have learned so far from the course, like <span className='underline'>React.js, Node.js, Mongo DB, and Express</span>. Must Include one new technology like Redux, TypeScript, Next Js, SAAS, any new Technology, etc.
            For the styling purpose, any CSS library and framework can be used without Daisy UI. But tailwind CSS is recommended.
            For deployment, anything like <span className='underline'>Netlify, Vercel, or Firebase</span> can be used.
            If you want to add any more features to make the website more eye-catching, you can do that.


        </div>
    );
};

export default Details;