import EmailButton from "./EmailButton/EmailButton";
import DescButton from "./DescButton/descButton";
import styles from "./AboutMe.module.scss";

const AboutMe = ({me}) => {
    return (
        <div className={styles.me}>
            <div className={styles["image-wrapper"]}>
                <img
                    src={`${me.avatar}`}
                    width={190}
                    height={190}
                    alt={me.siteName}
                    className={styles.image}

                />
            </div>
            <div className={styles.heading}>
                <span>Барашихин Егор</span>

            </div>
            <div className={styles.develoProgram}>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="22"
                     data-view-component="true" className="octicon octicon-cpu color-fg-muted mr-1">
                    <path fill="white"
                          d="M6.5.75a.75.75 0 00-1.5 0V2H3.75A1.75 1.75 0 002 3.75V5H.75a.75.75 0 000 1.5H2v3H.75a.75.75 0 000 1.5H2v1.25c0 .966.784 1.75 1.75 1.75H5v1.25a.75.75 0 001.5 0V14h3v1.25a.75.75 0 001.5 0V14h1.25A1.75 1.75 0 0014 12.25V11h1.25a.75.75 0 000-1.5H14v-3h1.25a.75.75 0 000-1.5H14V3.75A1.75 1.75 0 0012.25 2H11V.75a.75.75 0 00-1.5 0V2h-3V.75zm5.75 11.75h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25zM5.75 5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z"></path>
                </svg>
                <span>Developer Program Member</span>
            </div>
            <EmailButton/>
            <DescButton description={me.desc}/>
        </div>
    );
};

export default AboutMe;
