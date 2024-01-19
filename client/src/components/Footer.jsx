import React from 'react'

const Footer = () => {
  return (
    <>

    <div className="card text-center" id='contact-us'>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 600, }} >Property Maketplace</h5>
        <p className="card-text" style={{ fontSize: '1rem' }} >Our vision is to make all people the best place to live for them.</p>
        <a href="mailto:propertymaketplace@gmail.com" className="btn btn-primary" >Contact Us</a>
      </div>
      <div className="card-footer text-muted" style={{ fontSize: '0.9rem' }}>
        Made by Bitlegions
      </div>
    </div>

    </>
  )
}

export default Footer