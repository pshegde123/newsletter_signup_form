import React from "react";
import Header from "./Header";
import SubmitForm from "./Form";
import {default as logo } from '../assets/images/illustration-sign-up-desktop.svg';


/*<img src={logo} className="floar-right" alt="Illustration Sign Up"/>*/
/*    <div className="grid grid-cols-2">
                    <div>
                        <div>
                            <Header/>
                        </div>
                        <form>
                            <label>
                                Name:
                                <input type="text" id="name"/>
                            </label>
                        </form>
                    </div>
                    <div>
                        Test
                    </div>
                </div>
*/

export default function SubscribeComponent(){
    return (<>   
        <div className="py-20 min-h-screen bg-gray-200">
            <div className="container mx-auto">
                <div className="lg:relative bg-white p-10 rounded shadow-lg">
                    <div className="grid md:grid-cols-2 gap-1">
                        <div>
                            <Header/>   
                            <SubmitForm/>
                        </div>
                        <div>
                            <img src={logo} className="float-right object-none object-bottom" alt="Illustration"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}