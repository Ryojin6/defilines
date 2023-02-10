import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is De-Fi Lines?',
      answer: 'Onchain generated DeFi charts With: ATH, ATL and stats.',
    },
    {
      question: 'What makes these NFTs unique?',
      answer:
        'Each NFT is one-of-a-kind and offers a unique representation of the latest information in the De-Fi world. This makes them a fun and engaging way to stay informed and keep track of your investments.',
    },
    {
      question: 'Can I trust the information in these NFTs?',
      answer:
        'Yes, the information in the NFTs is sourced directly from the latest De-Fi and crypto trends and statistics, and is updated daily to ensure accuracy. You can trust that the information is up-to-date and relevant        ',
    },
  ],
  [
    {
      question: 'Mint Information',
      answer: 'More information to come in the near future.',
    },
    {
      question: 'How can I get in touch?',
      answer:
        'For more information or support, please don`t hesitate to reach out to us at https://twitter.com/DefiLinesNFT',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            De-Fi Lines FAQs
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
