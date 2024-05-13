import { ReactComponent as PlusIcon } from './assets/images/icon-plus.svg'
import { ReactComponent as MinusIcon } from './assets/images/icon-minus.svg'
import { useState } from 'react'

const Faq = ({ title, content, state }) => {
    const [isOpen, setIsOpen] = useState(state)

    return (
            <div className='mb-4 mt-5 overflow-hidden'>
                <div onClick={()=> {isOpen ? setIsOpen(false) : setIsOpen(true)}} className='head font-semibold my-2 text-dark-purple hover:text-text-purple cursor-pointer flex items-center justify-between md:gap-0 gap-4'>
                    {title}
                    { isOpen ? <MinusIcon className='icon' /> : <PlusIcon className='icon' /> }
                </div>
                <div className={`grid overflow-hidden content text-grayish-purple text-sm transition-all duration-300 ease-in-out ${ isOpen ? 'grid-rows-[1fr] opactiy-100' : 'grid-rows-[0fr] opactiy-0'}`}>
                    <div className='overflow-hidden'>
                        {content}
                    </div>
                </div>
                {/* <div className='mb-4 mt-5'>
                <div className="head font-semibold my-2 text-dark-purple hover:text-text-purple cursor-pointer flex items-center justify-between">
                    Is Frontend Mentor free?
                    <PlusIcon />
                </div>
                <div className="content text-grayish-purple text-sm">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</div>
            </div>
            <div className='mb-4 mt-5'>
                <div className="head font-semibold my-2 text-dark-purple hover:text-text-purple cursor-pointer flex items-center justify-between">
                    Can I use Frontend Mentor projects in my portfolio?
                    <PlusIcon />
                </div>
                <div className="content text-grayish-purple text-sm">Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</div>
            </div>
            <div className='mb-4 mt-5'>
                <div className="head font-semibold my-2 text-dark-purple hover:text-text-purple cursor-pointer flex items-center justify-between">
                    How can I get help if I'm stuck on a Frontend Mentor challenge?
                    <PlusIcon />
                </div>
                <div className="content text-grayish-purple text-sm">The best place to get help is inside Frontend Mentor's Discord community.</div>
            </div> */}
            </div>
            
    );
}
 
export default Faq;