'use client'
import React from "react";
import { motion } from "framer-motion";
import styles from "./learnMore.module.scss";
import Button from "../../../Button";

function LearnMore() {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.learnMore}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h3 className={styles.title}>LImited Edition</h3>
                <p className={styles.description}>
                    202 Dry Gin Բացահայտեք արվեստի և համի բացառիկ համադրությունը։ Այս սահմանափակ թողարկմամբ 202 Dry Gin-ը ստեղծվել է հայ ճանաչված նկարիչ Տիգրան Ցիտողծյանի հեղինակած արտիստիկ պիտակով՝ ընդգծելու մեր ջինի վարպետությունն ու նրբագեղությունը։
                </p>
                <Button text="Իմանալ ավելին" variant="primary" onClick={() => { }} />
            </motion.div>

            <motion.img
                className={styles.image}
                src="/img/png/learnMoreImg.png"
                alt="Learn More"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
            />
        </div>
    );
}

export default LearnMore;
