import React from 'react'

function FeatureCard(props) {
    return (
        <div className='shadow-2 p-5 surface-card text-center border-round'>
            <div className={`border-circle bg-${props.color}-50 p-4 text-${props.color}-600 inline-flex justify-content-center align-items-center mb-4`}>
                <i className={`pi ${props.icon} text-5xl`}></i>
            </div>
            <div className={`text-900 font-medium text-2xl mb-4 text-${props.color}-600`}>
                {props.text}
            </div>
        </div>
    )
}

export default FeatureCard