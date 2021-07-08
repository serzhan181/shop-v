import { useEffect } from 'react'
import Router from 'next/router'

export default function Landing() {
  useEffect(() => {
    if (prompt() === '1') {
      Router.push('/home')
    }
  }, [])

  return <div>Landing page</div>
}
