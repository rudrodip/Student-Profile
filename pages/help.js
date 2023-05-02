import React from 'react'
import Head from 'next/head'

const Help = () => {
  return (
    <div>
      <Head>
        <title>Help Desk</title>
        <link rel="icon" href='/logo/faq.png' />
      </Head>
      <h1 className="text-3xl font-medium title-font py-8 text-white text-center">Frequently Asked Questions</h1>

      <div className='container mx-auto'>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help