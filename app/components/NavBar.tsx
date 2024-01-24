import Image from "next/image";
import Logo from "../../public/images/siteLogo.png";

export default function NavBar() {
  return (
    <nav>
      <Image width={"2px"} src={Logo} />
      <ul>
        <li>Home</li>
      </ul>
    </nav>
  );
}
