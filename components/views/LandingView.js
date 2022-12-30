import CurvedText from "../typography/CurvedText";
import ModalNew from "../molecules/ModalNew";
import SendInBlueForm from "../molecules/SendInBlueForm";
import ScrollIndicator from "../atoms/ScrollIndicator";
import Par from "../typography/Par";
import Image from "next/image";
import H2 from "../typography/H2";



export default function LandingView({DATA}) {

  return (
    <div className="bg-white dark:bg-black">
      <section className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center py-8 -mt-28 bg-white/40 dark:bg-black/40 rounded-3xl">
          <CurvedText
            id="topheading"
            x="50"
            textClasses="font-serif font-bold fill-amber-600 uppercase text-2xl"
          >
            {DATA.hero.topheading}
          </CurvedText>
          <CurvedText
            id="heading"
            width="750"
            height="100"
            x="100"
            className="hidden sm:block"
            textClasses="fill-yellow-800 dark:fill-yellow-500 font-sans text-5xl"
          >
            {DATA.hero.heading}
          </CurvedText>
          <h1 className="sm:hidden text-yellow-800 dark:text-yellow-500 leading-20 font-sans text-5xl text-center mb-6">{DATA.hero.heading}</h1>
          <p className="font-mono font-semibold text-gray-700 dark:text-white text-lg max-w-lg -mt-0 mb-8 mx-4 md:mx-0 text-center">
            {DATA.hero.description}
          </p>
          <ModalNew
            btnLabel={DATA.hero.modal.btnOpen}
            heading={DATA.hero.modal.heading}
            description={DATA.hero.modal.description}
          >
            <SendInBlueForm label={DATA.hero.modal.btnConfirm} light/>
          </ModalNew>
        </div>
        <ScrollIndicator className="absolute bottom-8"/>
      </section>
      {/* Quick benefits */}
      <section className="w-full bg-gray-50 py-12 md:py-24 dark:bg-black">
        <div className="container mx-auto grid h-full grid-cols-1 gap-12 p-5 md:grid-cols-2 lg:grid-cols-3 font-sans">
          <div className={"md:col-span-2 lg:col-span-1"}>
            <H2 className={"text-4xl"}>{DATA.benefits.heading}</H2>
          </div>
          {DATA.benefits.benefits.map((benefit) => (
            <div>
              <H2 className="title-font mb-3 text-lg font-medium">
                {benefit.heading}
              </H2>
              <Par>{benefit.description}</Par>
            </div>
          ))}
        </div>
      </section>
      {/* FEATURES*/}
      {DATA.features.map((feature) => (
        <section className="font-sans container mx-auto grid grid-cols-1 place-items-center py-12 lg:mb-12 lg:grid-cols-2">
          <div
            className={`relative order-2 h-[28rem] w-full overflow-hidden rounded-l ${
              feature.isLeft ? "lg:order-2" : "lg:order-1"
            } lg:mt-0 lg:mb-0 lg:h-[40rem]`}
          >
            <Image
              layout="fill"
              alt="feature"
              className="h-full w-full object-contain object-center rounded-3xl"
              src={feature.imageSrc}
            />
          </div>
          <div
            className={`order-1 mb-12 max-w-md px-5 text-center ${
              feature.isLeft ? "lg:order-1" : "lg:order-2"
            } lg:mb-0 lg:px-0 lg:text-left`}
          >
            <Par className="mb-6 text-sm font-bold uppercase">
              {feature.category}
            </Par>
            <H2 className="title-font mb-6 text-5xl font-medium">
              {feature.heading}
            </H2>
            <Par className="mb-6 text-xl">{feature.description}</Par>
            <ModalNew
              btnLabel={feature.modal.btnOpen}
              btnConfirm={feature.modal.btnOpen}
              heading={feature.modal.heading}
              description={feature.modal.description}
            >
              <SendInBlueForm />
            </ModalNew>
          </div>
        </section>
      ))}
      {/* Quick Value */}
      <section className="w-full bg-gray-50 py-24 dark:bg-black">
        <div className="container mx-auto grid h-full grid-cols-1 gap-12 p-5 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <H2 className={"text-5xl xl:max-w-4xl "}>{DATA.values.heading}</H2>
            <Par className={"text-xl mt-2 xl:max-w-4xl "}>
              {DATA.values.subheading}
            </Par>
          </div>
          {DATA.values.values.map((value) => (
            <div>
              <H2 className="title-font mb-3 text-lg font-medium">
                {value.heading}
              </H2>
              <Par>{value.description}</Par>
            </div>
          ))}
        </div>
      </section>
      {/* PICTURE CTA */}
      <section className="mx-auto w-full dark:bg-black sm:pb-12 lg:py-32">
        <div className="container mx-auto bg-[url('https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-bottom px-5 py-24 shadow-xl sm:rounded-3xl sm:px-12 sm:py-12 md:py-16">
          <div className="mx-auto grid grid-cols-1 gap-8 lg:w-2/3 lg:grid-cols-3 xl:w-1/2">
            <H2
              light
              className="title-font text-4xl font-medium sm:pr-16 lg:col-span-3"
            >
              {DATA.cta.heading}
            </H2>
            <Par light className="text-xl lg:col-span-3">
              {DATA.cta.description}
            </Par>
            <ModalNew
              btnClassName="lg:col-span-2"
              btnLabel={DATA.cta.modal.btnOpen}
              heading={DATA.cta.modal.heading}
              description={DATA.cta.modal.description}
              btnConfirm={DATA.cta.modal.btnConfirm}
            >
              <SendInBlueForm />
            </ModalNew>
          </div>
        </div>
      </section>
    </div>
  );
}
