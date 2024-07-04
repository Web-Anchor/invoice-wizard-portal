import Layout from '@components/Layout';
import FrequentlyAskedQuestions from '@components/FrequentlyAskedQuestions';
import { TopBackground, BottomBackground } from '@components/Background';
import TestimonialsWhiteGrid from '@components/TestimonialsWhiteGrid';
import SimpleOnBg from '@components/SimpleOnBg';
import { components } from '@lib/components';
import HeaderWithEyebrow from '@components/HeaderWithEyebrow';
import FeatureSectionsWithProductDark from '@components/FeatureSectionsWithProductDark';
import HeroSplitWithImage from '@components/HeroSplitWithImage';
import SimpleOnDark from '@components/SimpleOnDark';
import { SectionWrapper } from './components/Wrapper';
import Workflow from './components/Workflow';

export default async function Page(params: { searchParams: { id: string } }) {
  const data = await components({ id: params.searchParams.id });
  const company = data?.components?.find(
    (component) => component?.type === 'Company'
  );
  const landingPageHeader = data?.components?.find(
    (component) => component.type === 'Landing Page Header Section'
  );
  const landingPageFooter = data?.components?.find(
    (component) => component.type === 'Landing Page Footer Section'
  );

  return (
    <Layout>
      <SectionWrapper>
        <TopBackground />
        <BottomBackground />

        <HeaderWithEyebrow
          slogan={landingPageHeader?.slogan!}
          title={landingPageHeader?.title!}
          description={landingPageHeader?.description!}
          hide={!landingPageHeader?.id}
        />

        <HeaderWithEyebrow
          title="Welcome to Your Invoicing Portal"
          description="Discover the ease of managing your financial activities from one central location. Our platform offers you a dedicated space where you can effortlessly view transactions from your vendor, download invoices, and make necessary adjustments such as adding notes or updating details. With these powerful features, you can keep track of all your financial dealings and ensure that your records are always up-to-date and accurate. Contact your vendor today to access your personalized invoicing portal and start experiencing the convenience of streamlined financial management."
          slogan="Your Gateway to Effortless Invoicing!"
        />
        <SimpleOnBg
          title="Customer Portal. Your Invoicing made smarter."
          slogan="Empowering You, One Click at a Time!"
          description={[
            'Experience the next level of efficiency and convenience with our Customer Portal. Building on the ease of managing your financial activities, our platform allows you to effortlessly handle invoicing, download essential documents, and track transactions with precision. Our intuitive interface ensures that you can streamline your financial tasks and maintain control without any hassle. Join us today and see how simple and effective financial management can be with our tailored invoicing solutions.',
          ]}
        />
        <Workflow />
        <SimpleOnBg
          description={[
            'Our platform is designed to provide you with a seamless and efficient invoicing experience. With our Customer Portal, you can easily manage your financial activities, view transactions, and download invoices with just a few clicks. Our user-friendly interface ensures that you can stay in control of your finances without any hassle. Join now to start enjoying the benefits of a streamlined invoicing process and experience the convenience of managing your financial activities in one central location.',
          ]}
        />
        <HeroSplitWithImage
          title="Ready to Simplify Your Invoicing?"
          description="Welcome to Your Personalized Invoicing Platform, designed to make managing your financial activities effortless and intuitive. With our portal, you can easily view transactions from your vendor, download and adjust invoices, and keep all your financial records organized. Sign up now to start experiencing the benefits of a streamlined invoicing process. Enjoy seamless and efficient financial management that saves you time and effort, allowing you to focus on what truly matters. Take the next step towards smarter financial control today!"
          url="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
          slogan="Join the Community of Happy Users!"
        />

        <HeaderWithEyebrow
          slogan={landingPageFooter?.slogan!}
          title={landingPageFooter?.title!}
          description={landingPageFooter?.description!}
          hide={!landingPageFooter?.id}
        />
        <TestimonialsWhiteGrid />
        <FrequentlyAskedQuestions />
      </SectionWrapper>
    </Layout>
  );
}
