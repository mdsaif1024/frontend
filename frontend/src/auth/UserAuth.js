import React, { useState } from 'react'

const UserAuth = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  
    return (
    <div>UserAuth</div>
  )
}

export default UserAuth