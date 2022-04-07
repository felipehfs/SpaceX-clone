import styles from './Hero.module.scss';

type HeroProps = {
    imageUrl: string;
    alt: string;
    subtitle?: string;
    title: string;
    actionName: string;
    actionLink: string;
};

export default function Hero({ imageUrl, alt, subtitle, title, actionName, actionLink }: HeroProps) {
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt= {alt} />

            <div className={styles.headline}>
                {subtitle ? <h4>{subtitle}</h4> : null}
                <h2>{title}</h2>
                <a href={actionLink}>{actionName}</a>
            </div>
        </div>
    )
}