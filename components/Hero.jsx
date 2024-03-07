import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(banner.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Super<span className='text-orange-500'>Store</span></h1>
                <p className="mb-5">Your Destination for quality furniture</p>
                <button className="btn btn-primary">Explore</button>
                </div>
            </div>
    </div>
  )
}

export default Hero