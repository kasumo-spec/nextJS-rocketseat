import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { SignInButton } from '../SignInButton';
import Link from 'next/link'
import ActiveLink from '../ActiveLink';

export const Header = () => {

  return (
  	<header className={styles.headerContainer}>
	  <div className={styles.headerContent}>
		<img src="/images/logo.svg" alt="Logotipo" />
		<nav>
		  <ActiveLink activeClassName={styles.active} href='/'>
			<a>Home</a>
		  </ActiveLink>
		  <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
			<a>Posts</a>
		  </ActiveLink>
		</nav>
		<SignInButton />
	  </div>
	</header>
  )
}