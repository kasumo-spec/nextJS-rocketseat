import Head from 'next/head';
import styles from './home.module.scss';
import { GetStaticProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

const Home = ({ product }:HomeProps) => {
  return (
	  <>
		<Head>
		  <title>Home | News Subscription</title>
		</Head>
		<main className={ styles.contentContainer }>
		  <section className={ styles.hero }>
			<span>👏 Hey, welcome</span>
			<h1>News about the <span>React</span> wordl.</h1>
			<p>
			  Get acess to all the publications <br/>
			  <span>for {product.amount} month</span>
			</p>
			<SubscribeButton priceId={product.priceId} />
		  </section>

		  <img src="/images/avatar.svg" alt="Girl coding"/>
		</main>
	  </>
  );
};

export default Home;

export const getStaticProps:GetStaticProps = async () => {
  	const price = await stripe.prices.retrieve("price_1JEduUAyKGV1N8G8JBrsp41R")


  const product = {
  	  priceId: price.id,
	  amount: new Intl.NumberFormat('en-US', {
	    style: 'currency',
		currency: 'USD'
		// @ts-ignore
	  }).format(price.unit_amount / 100),
	}

  	return {
		props: {
		  product
		},
	  	revalidate: 60 * 60 * 24
	}
};