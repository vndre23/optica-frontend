import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

export const CheckingLoading = () => {
  return (
    <>
        <div className=' h-full w-full flex align-items-center justify-content-center'>
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    </>
  )
}