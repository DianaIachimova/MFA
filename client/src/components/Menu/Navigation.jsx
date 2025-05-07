import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemMenu from "../../elements/ItemMenu";
import Popover from "../../elements/Popover";
import Submenu from "../../elements/Submenu";

const Navigation = () => {
  const { i18n } = useTranslation();
  const navItems = useSelector((state) => state.menu.nav);

  return (
    <div className="flex justify-between w-4/12">
      {navItems.map((item, key) => {
        if (item.items.length) {
          return (
            <Popover
              key={item._id}
              contentWidth={600}
              chevronPosition={{ left: 64 }}
              content={<Submenu items={item.items} />}
              className="p-3"
            >
              <Link to={`/${i18n.language}${item.href}`}>
                <div className="flex group hover:text-yellow-400">
                  <ItemMenu
                    name={item.key}
                    className="group-hover:text-yellow-400"
                  />

                  <ChevronDownIcon className="w-4 h-4 text-white ml-2 mt-1 group-hover:text-yellow-400" />
                </div>
              </Link>
            </Popover>
          );
        }

        return (
          <Link key={key} to={`/${i18n.language}${item.href}`}>
            <ItemMenu name={item.key} />
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
