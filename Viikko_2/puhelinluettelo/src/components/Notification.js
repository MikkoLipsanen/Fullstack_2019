import React from 'react'

const Notification = ({ message }) => {

    if (message === null) {
      return null
    }

    else if (message.includes("poistettu")) {
      return (
        <div className="error">
          {message}
        </div>
      )
    }
     
    return (
      <div className="note">
        {message}
      </div>
    )
  }

export default Notification