import s from './style.module.css';

const LayoutBlock = ({ id, title, descr, urlBg, colorBg, colorTitle, children }) => {
    const sectionStyle = {};
    const colTitle = { color: colorTitle };

    if (urlBg) {
        sectionStyle.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <section id={id} style={sectionStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && (
                            <h3 style={colTitle}>{title}</h3>
                        )}
                        <span className={s.separator}></span>
                    </div>
                    <div className={[s.desc, s.full].join(' ')}>
                        {descr && (
                            <p>{descr}</p>
                        )}
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;
