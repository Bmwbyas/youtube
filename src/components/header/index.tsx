import styles from '../../styles/header/header.module.scss'
import Menu from "../menu";
import Link from "next/link";
import Search from "@/components/search";

const Header = () => {
    return (
        <header className={styles.header__container}>
            <div className={styles.header__logo__container}>
                <Menu/>
                <Link className={styles.icon__logo__container} href={'/'}>
                    <div className={styles.icon__logo}/>
                </Link>
            </div>
            <Search/>
            <div className={styles.header__profile__container}>
                profile
            </div>
        </header>
    );
};

export default Header;
