import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Submenu({ items = [] }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col justify-start ml-4 mt-2 mb-2">
      {items.map((item) => (
        <Link
          to={`/${i18n.language}${item.href}`}
          className={cn(
            "border-neutral-500 text-white py-0.5 hover:text-yellow-400 hover:font-medium"
          )}
        >
          {t(item.title)}
        </Link>
      ))}
    </div>
  );
}

export default Submenu;
