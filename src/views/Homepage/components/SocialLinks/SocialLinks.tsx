import clsx from "clsx";
import { SOCIAL_LINKS } from "./constants";

const SocialLinks: React.FC<{ light?: boolean; className?: string }> = ({
  light,
  className,
}) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-row",
        light ? "grid-cols-3" : "grid-cols-1",
        className
      )}
    >
      {SOCIAL_LINKS.map((link, i) => {
        return (
          <a
            key={`social-link-${i}`}
            href={link.href}
            className="flex items-center mb-4 text-inherit"
          >
            <link.Icon size={32} className="mr-4" />
            {!light && (
              <div className="flex flex-col items-start">
                <p className="font-h5">{link.label}</p>
                <p className="font-serif text-sm text-inherit">
                  {link.placeholder}
                </p>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
