import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://saudipmo.community'), // TODO: change to your live domain
  title: 'مجتمع مكاتب إدارة المشاريع السعودي — Saudi PMO Community',
  description:
    'An independent community for PMO and project-delivery professionals in Saudi Arabia — rooted in Najdi heritage, built for Vision 2030.',
  icons: { icon: '/assets/t-icon-green.png' },
  openGraph: {
    title: 'Saudi PMO Community — مجتمع مكاتب إدارة المشاريع السعودي',
    description: "Where Saudi Arabia's project leaders build together.",
    images: ['/assets/hero-heritage.png'],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
