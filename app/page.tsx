import Image from 'next/image';
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
		<main>
			<header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
				<Image
					src={Logo}
					alt='logo'
				/>
			</header>
			<section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
				<div>
					<h1 className='capitalize text-4xl md:text-5xl font-bold'>
						Trade job management software
						<span className='text-primary py-2 block'>
							{' '}
							to streamline jobs,{' '}
						</span>
						estimating & quoting.
					</h1>
					<p className='leading-loose max-w-md mt-4'>
						Leave the hard graft behind. If your job management system
						can&apos;t capture new leads as jobs, create accurate quotes and
						takeoffs, and dispatch instant online quotes with e-signatures, then
						it&apos;s time to upgrade.
					</p>
					<Button
						asChild
						className='mt-4'
					>
						<Link href='/add-job'>Get Started</Link>
					</Button>
				</div>
				<Image
					src={LandingImg}
					alt='landing'
					className='hidden lg:block'
				/>
			</section>
		</main>
	);
}
