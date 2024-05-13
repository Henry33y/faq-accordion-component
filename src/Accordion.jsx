import { ReactComponent as StarIcon } from './assets/images/icon-star.svg'
import Faq from './Faq';

const Accordion = () => {
    return (
        <div className="accordion w-[570px] md:py-6 py-3 md:px-8 px-6 bg-white rounded-xl my-5 mx-6 shadow-sm">
            <div className="heading flex items-center md:mt-5 mt-4">
                <StarIcon className='md:scale-100 scale-75' />
                <h1 className="md:text-5xl text-4xl font-bold md:ml-4 ml-3 text-dark-purple">FAQs</h1>
            </div>


            <div className='faq divide-y md:pt-5'>
                <Faq title={"What is Frontend Mentor, and how will it help me?"} content={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."} state={true}/>
                <Faq title={"Is Frontend Mentor free?"} content={"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."} state={false}/>
                <Faq title={"Can I use Frontend Mentor projects in my portfolio?"} content={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"} state={false}/>
                <Faq title={"How can I get help if I'm stuck on a Frontend Mentor challenge?"} content={"The best place to get help is inside Frontend Mentor's Discord community."} state={false}/>
            </div>
        </div>
    );
}
 
export default Accordion;