import { Disclosure } from '@headlessui/react'
import {BiChevronDown,BiChevronUp} from "react-icons/bi"
const PlaysFilter = (props) => {
  return (
 <Disclosure>
    {({ open }) => (
        <>
        <Disclosure.Button className="py-1 flex items-center gap-3">
         {open ? <BiChevronUp/> :<BiChevronDown/>}
       <span className={open?"text-red-600":"text-gray-700 text-lg"}> {props.title}</span>
      </Disclosure.Button>
     
      <Disclosure.Panel className="text-gray-500">
        <div className="flex items-center gap-3 flex-wrap">
          {props.tags.map((tag)=>(
            <>  
              <div className="border-2 border-gray-200 p-1 bg-white">
                   <span className="text-red-600 msx-w-md text-lg">{tag}</span>
              </div>
            </>
          ))
          }
        </div>
      </Disclosure.Panel>
        </>
        )}
  </Disclosure>
  )   
};
export default PlaysFilter;
