import s from './style.module.css';

const LayoutBlock = ({ title, descr, urlBg, colorBg }) => {
    const backgroundProp = urlBg ? `url(${urlBg})` : colorBg;
    const backgroundStyle = {
        background: `${backgroundProp}`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    };

    return (
        <section style={backgroundStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && (
                            <h3>{title}</h3>
                        )}
                        <span className={s.separator}></span>
                    </div>
                    <div className="desc full">
                        {descr && (
                            <p>{descr}</p>
                        )}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;
