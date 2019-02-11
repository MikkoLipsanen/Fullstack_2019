import React from 'react'

const Filter = ({showLimited, handleShowLimited}) =>(
    <form>
      <div>rajaa näytettäviä: 
        <input 
          value={showLimited} 
          onChange={handleShowLimited}
        />
      </div>
    </form>
)

export default Filter