import Image from 'next/image';

const Logo = () => (
  <Image
    src="/brand/gorizont-logo.jpg"
    alt="ГОРИЗОНТ"
    width={1717}
    height={585}
    priority
    className="h-11 w-auto md:h-14"
  />
);

export default Logo;
