import React from 'react'


const ProjectIntro = ({text, pageTitle, children}) => {

    return (
        // <section className={`page-intro ${bgColor}`}>
        <section className="page-intro">
            <div className="wrapper">
                <h1 className="page-intro_title">{pageTitle}</h1>
                {text && (
                    <p className="page-intro_text h4">{text}</p>
                )}
                {children}
            </div>
        </section>
    )
}

export default ProjectIntro