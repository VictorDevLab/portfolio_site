import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <>
         <p className='mt-10 text-center font-bold text-md'>Feel free to explore my other projects on my
            <a className='text-blue-700 underline' href="https://github.com/VictorDevLab"> GitHub profile</a> </p>
         <div className="flex flex-col md:flex-row justify-center my-16">

            <div className="w-full md:w-7/12">
               <Title>Timeline</Title>
               {timeline.map(item => (
                  <TimelineItem
                     year={item.year}
                     title={item.title}
                     duration={item.duration}
                     details={item.details}
                  />
               ))}
            </div>
         </div>
      </>
   )
}

export default Timeline;