import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.svg";

const Header = () => (
  <Link href="/" passHref>
    <a>
      <Image src={logoSrc} alt="React Pulse logo" />
    </a>
  </Link>
);

export default Header;
