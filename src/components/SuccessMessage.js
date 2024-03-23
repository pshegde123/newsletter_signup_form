import {default as icon} from '../assets/images/icon-list.svg';

export default function SuccessMessage(){
    return (<>   
        <div class="py-20 min-h-screen bg-gray-200">
            <div class="container mx-auto">
                <div class="lg:relative bg-white p-10 rounded shadow-lg">
                    <div className='container grid grid-rows-5'>
                        <div>
                            <img src={icon} className="inline mr-1" alt="Icon"/>
                            <h1 className="font-bold text-5xl mb-2">Thanks for subscribing!</h1>
                        </div>
                        <div>
                            <p>A conformation email has been sent to</p>
                        </div>                               
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}