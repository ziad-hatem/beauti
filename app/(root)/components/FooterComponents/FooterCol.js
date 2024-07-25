import Link from "next/link";

const FooterCol = ({ links, colTitle }) => {
  return (
    <div className="">
      <h3 className="footer_head_shadow text-xl font-extrabold text-primery">{colTitle}</h3>
      <ul className="text-15 mt-3  max-w-[244px] ">
        {links.map((link) => (
          <li
            key={link.title + "footer"}
            className="mb-1.5 transition-all hover:-translate-x-1"
          >
            <Link href={link.href} className=" transition-all hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterCol;
