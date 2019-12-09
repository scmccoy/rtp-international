import React from 'react'

const Address = () => {
  function handleClick(e) {
    e.preventDefault()
    const addressElement = document.getElementById('address')
    navigator.clipboard.writeText(addressElement.textContent)
  }

  return (
    <div
      style={{
        position: `relative`,
      }}
    >
      <h3>Send all demos, cassettes, records and other items to: </h3>
      <p
        id="address"
        style={{
          border: `2px solid #fff`,
          maxWidth: `250px`,
          padding: `1em`,
          fontWeight: `bold`,
        }}
      >
        R.T.P. international <br />
        P.0. Box 12622 <br />
        Portland, OR 97212
      </p>
      <button
        type="button"
        style={{ position: `absolute`, bottom: `2px`, left: `192px` }}
        onClick={handleClick}
      >
        Copy
      </button>
    </div>
  )
}

export default Address
