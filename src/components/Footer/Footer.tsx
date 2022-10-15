import Logo from "../../icons/Logo";
import SocialLinks from "../../views/Homepage/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-dark-800">
      <div className="container mx-auto">
        <div className="flex w-full justify-between mb-4">
          <Logo width={128} stroke="white" />
          <SocialLinks light className="text-white" />
        </div>
        <p className="font-body text-white my-2">
          Adolfo Güemes 364 - Salta - Argentina
        </p>
        <a href="phone:3876831581 " className="font-body text-white">
          387 683-1581
        </a>
        <p className="font-legals text-white mt-2">
          © 2022, Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
