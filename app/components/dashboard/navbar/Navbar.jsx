import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOutButton from "../../site/signoutbutton/SignOutButton";
import Link from "next/link";

async function Navbar() {
  const session = await getServerSession(authOptions);

  const user = session.user;

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/assets/dashboard/images/menu/logo.svg"
            width={45}
            height={45}
          />
          <span>ExpressTech</span>
        </Link>
      </div>
      <div className={styles.icons}>
        <Image
          src="/assets/dashboard/images/menu/search.svg"
          width={20}
          height={20}
          alt=""
          className={styles.icon}
        />
        <Image
          src="/assets/dashboard/images/menu/app.svg"
          width={20}
          height={20}
          alt=""
          className={styles.icon}
        />
        <Image
          src="/assets/dashboard/images/menu/expand.svg"
          width={20}
          height={20}
          alt=""
          className={styles.icon}
        />

        <div className={styles.notification}>
          <Image
            src="/assets/dashboard/images/menu/notifications.svg"
            width={20}
            height={20}
            alt=""
            className={styles.icon}
          />
          <span>1</span>
        </div>
        <div className={styles.user}>
          <Image
            src="/assets/dashboard/images/menu/profile.svg"
            width={20}
            height={20}
            alt=""
          />

          <span>{user?.name}</span>
        </div>
        <img src="/settings.svg" alt="" className={styles.icon} />
        <div>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
