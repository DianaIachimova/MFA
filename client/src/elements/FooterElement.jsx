import React from "react";
import { useTranslation } from "react-i18next";

function FooterElement(props) {
  const { t } = useTranslation();
  const { title, items = [] } = props;

  return (
    <div className="flex mr-10">
      <ul className="list-none block mr-5">
        <li>
          <div className="text-yellow-400 text-xl font-extralight mb-4">
            {t(title)}
          </div>
        </li>
        {items.map((item, key) => (
          <li className="mb-2 font-thin text-[18px]" key={key}>
            <a href={item.href} className="text-neutral-700">
              {t(item.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterElement;
