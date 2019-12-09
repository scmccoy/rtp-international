import React from 'react'

const Email = () => (
  <div
    style={{
      position: `relative`,
    }}
  >
    <h3>Send all digital content to: </h3>
    <p
      id="email"
      style={{
        border: `2px solid #fff`,
        maxWidth: `250px`,
        padding: `1em`,
        fontWeight: `bold`,
      }}
    >
      <a href="email:contact@rtp-records.com">contact@rtp-records.com</a>
    </p>
  </div>
)

export default Email
