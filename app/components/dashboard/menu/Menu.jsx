import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { menu } from "./data";

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menu.map((item) => (
        <div className={styles.item} key={item.id}>
          <span className={styles.title}>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link
              href={`/admin${listItem.url}`}
              className={styles.listItem}
              key={listItem.id}
            >
              <Image
                src={`/assets/dashboard/images/menu/${listItem.icon}`}
                width={20}
                height={20}
                alt=""
              />
              <span className={styles.listItemTitle}>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
