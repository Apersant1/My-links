import React from "react";
import AboutMe from "../Home/AboutMe/AboutMe";
import Grid from "./Grid/Grid";
import Circles from "../../ui/Circles/Circles";
import styles from "./Home.module.scss";

const links = [
    {
        _id: 1,
        icon: {
            path: "https://cdn.iconscout.com/icon/free/png-256/vk-3770755-3147372.png",
            width: 100,
        },
        gradient: {
            from: "#13E780",
            to: "#00bbd5",
        },
        link: "https://vk.com/captain_jasey",
        title: "Тут можешь написать мне",
        isImportant: true,
    },
    {
        _id: 2,
        icon: {
            path: "https://cdn.iconscout.com/icon/free/png-256/github-2489178-2082901.png",
            width: 100,
        },
        gradient: {
            from: "#f46b45",
            to: "#eea849",
        },
        link: "https://github.com/Apersant1",
        title: "Весь код тут",

    },
    {
        _id: 3,
        icon: {
            path: "https://cdn.iconscout.com/icon/free/png-256/paper-plane-1440202-1217168.png",
            width: 100,
        },

        gradient: {
            from: "#83a4d4",
            to: "#b6fbff",
        },
        link: "https:/t.me/appersant",
        title: "Для скрытого сообщения",

    },
    {
        _id: 4,
        icon: {
            path: "https://cdn.iconscout.com/icon/free/png-256/discord-2474816-2056055.png",
            width: 100,
        },

        gradient: {
            from: "#00c6ff",
            to: "#0072ff",
        },
        link: "https://discord.gg/pQyvQHAS4j",
        title: "Заходи и помурчи на ушко",

    },
    {
        _id: 5,
        icon: {
            path: "https://resources.hackthebox.eu/hubfs/HTB-Logo-1.png",
            width: 170,
        },

        gradient: {
            from: "#de6262",
            to: "#ffb88c",
        },
        link: "https://app.hackthebox.com/profile/279472",
        title: "Тут ломают компы и лица",

    }


];
const me = {
    siteName: "AppersantLinks",
    avatar: "https://sun9-87.userapi.com/s/v1/if2/SFoqn8pcOiZ2jRE6lQj8Wc3fL7WOCt1rL-E2A5tJBCaJ3ZTj4r0QD3WIL8nB09yUtdkfc7lqKgvOersorp2TPCMb.jpg?size=899x899&quality=95&type=album",
    desc: "Меня зовут Егор",
};

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <AboutMe me={me}/>

                <Grid links={links}/>
            </div>
            <Circles/>
        </section>
    );
};

export default Home;
