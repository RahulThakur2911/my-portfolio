import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl '>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-4xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='width-full rounded-4xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati excepturi maiores dolores ab distinctio ipsum tempore sint aut, inventore numquam corrupti fugit sunt reprehenderit soluta laboriosam voluptates nulla. Accusamus veniam autem doloribus animi ab, eos error aperiam earum quia.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList?.map(({ icon, iconDark, title, description }, index) =>
                            <li key={index} 
                            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--color-lightHover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-light)]'
                            >
                                <Image src={icon} alt={title} className='w-7 mt-3'/>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        )}
                    </ul>

                    <h4 className='my-6 text-gray-700'>Tools I Use</h4> 
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {
                        toolsData?.map((tool,i)=>(
                            <li key={i} 
                            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[var(--color-lightHover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-light)]'
                            >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About