import React from 'react'

export const  Breadcrumb=()=> {
  return (
    <>
        {/* <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center'> */}
            <ul className='list-none p-0 m-0 flex font-medium overflow-y-hidden overflow-x-auto border-round shadow-2'>
                <li className='relative p-3 bg-indigo-500'>
                    <a className='cursor-pointer'>
                        <i className='pi pi-home text-white'></i>
                    </a>
                </li>
                <li className='relative p-3 bg-indigo-500'>
                    <div className='absolute left-0 top-0 z-1'
                     style={{borderLeft: "20px solid var(--indigo-500)", borderTop: "26px solid transparent", borderBottom: "26px solid transparent", width: "0px", height: "0px"}}

                    >
                        <a className='cursor-pointer text-white pl-4 white-space-nowrap'>
                            Level 3
                        </a>
                    </div>
                </li>
            </ul>
        {/* </div> */}
    </>
  )
}

