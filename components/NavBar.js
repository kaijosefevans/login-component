import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar(  ) {
  const router = useRouter();
  return (
    <div className="nav-bar">
      <Link href="/" passHref>
        <p id="title">Lorem Ipsum Fan Page</p>
      </Link>
      <p id="creator">by Kai Evans</p>
      <div className="login">
        {(router.pathname !== '/login') ?
        <Link href='/login' passHref>
        <button id='login-button'>Login</button>
      </Link> : ''}
      </div>
    </div>
  )
}