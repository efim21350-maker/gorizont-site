import Image from 'next/image';

const Logo = () => (
  <Image
    src="/brand/gorizont-logo.jpg"
    alt="ГОРИЗОНТ"
    width={1717}
    height={585}
    priority
    className="h-12 w-auto md:h-16"
  />
);

export default Logo;
