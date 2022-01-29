import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/useAuth'

export default function Private ( { getAccess, children } )
{
  const auth = useAuth()
  const [ access, setAccess ] = useState( null )
  const [ loading, setLoading ] = useState( true )
  const [ redirectCount, setRedirectCount ] = useState( 5 )
  const userRole = auth.userRole
  useEffect( () =>
  {
    const unsubscribe = setTimeout( () =>
    {
      setRedirectCount( redirectCount - 1 )
    }, 1000 )
    return () => clearInterval( unsubscribe )
  }, [ redirectCount ] )
  const isIndexed = getAccess.findIndex( ( item ) => item === userRole )
  useEffect( () =>
  {
    if ( isIndexed !== -1 )
    {
      setAccess( true )
      setLoading( false )
    } else
    {
      setAccess( false )
      setLoading( false )
    }
  }, [ isIndexed ] )

  return (
    <>
      {!loading && access ? (
        children
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2>Lost your way ? Don't worry! </h2>
          <p> We will pick up you home in {redirectCount}s</p>
          {redirectCount === -1 && <Navigate to='/' />}
        </div>
      )}
    </>
  )
}



