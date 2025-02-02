import React from 'react'

const FacebookIcon = ({ color = 'white' }) => {
    return (
        <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM17.6676 16.7028V25.4077H14.066V16.7031H12.2666V13.7034H14.066V11.9024C14.066 9.4552 15.082 8 17.9687 8H20.372V11.0001H18.8698C17.7461 11.0001 17.6717 11.4193 17.6717 12.2017L17.6676 13.7031H20.389L20.0706 16.7028H17.6676Z'
                fill={color}
            />
        </svg>
    )
}

export default FacebookIcon
