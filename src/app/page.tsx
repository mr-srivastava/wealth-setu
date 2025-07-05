import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DynamicHomepage from '@/components/DynamicHomepage/DynamicHomepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WealthSetu - Your Financial Journey Starts Here',
  description: 'WealthSetu - Your Financial Journey Starts Here',
};

export default function Home() {
  return (
    <>
      <Header />
      <DynamicHomepage />
      <Footer />
    </>
  );
}
