import React from 'react'
import './sidebar.css';
const Sidebar = () => {
  return (
    <>
        <div className="flex-column lg:flex-column lg:w-18rem lg:flex lg:top-0 lg:bottom-0 lg:fixed">
        <div className="pb-3 px-4 bg-template-sidebar overflow-y-auto row-gap-4 flex-column flex-grow-1 flex">
            <div className="align-items-center flex-shrink-0 h-4rem flex">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=white" className="h-2rem w-auto"/>
            </div>
            <nav className="flex-column flex flex-1">
                <ul role="list" className="row-gap-4 flex-column flex flex-1 list-none m-0 p-0">
                    <li>
                        <ul className="mx-0 list-none m-0 p-0">
                            <li>
                                <a className="line-height-1 font-semibold text-sm p-2 bg-select-template-sidebar border-round-md column-gap-2 flex text-white">Dashboard</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

        </div>
        asdsa
    </>
  )
}

export default Sidebar