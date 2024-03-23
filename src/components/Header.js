import {default as icon} from '../assets/images/icon-list.svg';

export default function Header(){
    return(<>
        <div className='container grid grid-rows-5'>
            <div>
                <h1 className="font-bold text-5xl mb-2">Stay Updated!</h1>
            </div>
            <div>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div>
                <p><img src={icon} className="inline mr-1" alt="Icon"/>Product discovery and building what matters.</p>
            </div>            
            <div>
                <p><img src={icon} className="inline mr-1" alt="Icon"/>Measuring to ensure updates are a success.</p>
            </div>            
            <div>
                <p><img src={icon} className="inline mr-1" alt="Icon"/>And much more!</p>
            </div>            
         </div>
        </>)
}