"use client"

import styles from '../../styles/search/search.module.scss'
import Button from "@/components/button";
import {useState} from "react";

const Search = () => {
    //input value
    const [value, setValue] = useState<string>('')
    //visible search icon
    const [isActive, setIsActive] = useState(false)
    //visible clear value cross

    const onClickInputHandler = (e: number) => {
        if (!isActive) setIsActive(true)

    }

    return (
        <div className={styles.search__container}>
            <label className={styles.input__label}>
                {isActive && <div className={styles.icon__search__container}>
									<div className={styles.icon__search}/>
								</div>}
                <input className={styles.input}
                       value={value}
                       onChange={(e) => setValue(e.currentTarget.value)}
                       onClick={() => {
                           onClickInputHandler
                       }}
                       onBlur={() => setIsActive(false)}
                       onKeyDown={(e) => {
                           if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                               e.currentTarget.blur()
                           }
                       }}
                       placeholder={'Search'}
                       type="text"
                />
                {value !== '' && <div >
									<Button
										typeStyle={"icon"}
										onClick={() => setValue('')}>
										<div className={styles.icon__cross}/>
									</Button>
								</div>}
            </label>
                <Button
                    cl={styles.button__container}
                    typeStyle={"icon"}
                    onClick={() => {
                        console.log('search')
                    }}>
                    <div className={styles.icon__search}/>
                </Button>
        </div>
    );
};

export default Search;
