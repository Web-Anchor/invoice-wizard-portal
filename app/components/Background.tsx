export function TopBackground() {
  return (
    <div
      className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
}

export function BottomBackground() {
  return (
    <div
      className="absolute inset-x-0 bottom-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-10"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
}

export function OG() {
  return (
    <section className="relative flex flex-col">
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="flex relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="flex flex-col px-5 w-full lg:mx-auto max-w-3xl lg:text-center">
        <p className="text-xl font-semibold leading-7 text-indigo-600">
          Your Gateway to Effortless Invoicing!
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
          Invoicing Portal
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover the ease of managing your financial activities from one
          central location. Our platform offers you a dedicated space where you
          can effortlessly view transactions from your vendor, download
          invoices, and make necessary adjustments such as adding notes or
          updating details. With these powerful features, you can keep track of
          all your financial dealings and ensure that your records are always
          up-to-date and accurate. Contact your vendor today to access your
          personalized invoicing portal and start experiencing the convenience
          of streamlined financial management.
        </p>
      </div>
    </section>
  );
}

// https://og-playground.vercel.app/?share=tVNNa9wwEP0rg04trKrd7VJSs80t7Sm3XAq-yPbYmkSWhDWObUL-e-V1d9k2CwmBCCTNE6P33ujjSZS-QpEJpeDWV1QTVlDomEbvwDCHmCnFmuxArurpS-lblXrwDh1H1eruAZlcoyKWTN5FVbKWR5C73O0regQefuSitjjCPMjSWxhk3VsLZpmIsY2yTKTYwX0fmerpCItGDiYl5OI6d5DaK5RhkpsthFHuLtMWyAOigyCvTpSJ1GwvcTKOLL-OFmKbHeJdimvvWBbeVsCdLh9S_ZKpMbxkN52e5Pf1ekGL-JlQkopBu-vfvu_gl2Yc9ATs4aaufccWY4Sf5LQrSVu41U432CaOvTrsOtlVZvsm72fWt--yvsTp-qnx8tt6_XGl7FW62OPy3myWmi5ZP3m9-s8PuUdP5cHV2e5_zJN_qb9JYFEXK-HD4fGK7EkMVLERWVJZCYPzOYlsN4MKi74RWa1txJXA1t_T3RTmn5Te1owSz-z3pi2wEhl3PT6vBOsiZdz9_U7wCceAHc1Hou1n8fwH
{
  /* <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
  <div tw="flex flex-col w-full py-12 px-4 items-center justify-between p-8">
    <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
      <span>Your Gateway to Effortless Financial Management</span>
    </h2>
    <h2 tw="flex flex-col text-xl sm:text-2xl font-bold tracking-tight text-gray-900 text-center text-indigo-600">
      <span>Your Gateway to Effortless Financial Management</span>
    </h2>
  </div>
  <h1 tw="text-2xl font-bold text-gray-800">
    invoic<span tw="text-indigo-600">io</span>
  </h1>
</div> */
}
