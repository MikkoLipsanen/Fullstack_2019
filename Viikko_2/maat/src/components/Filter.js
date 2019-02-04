import React from 'react'

const Filter = ({showLimited, handleShowLimited}) =>(
    <form>
      <div>find countries
        <input 
          value={showLimited} 
          onChange={handleShowLimited}
        />
      </div>
    </form>
)

export default Filter