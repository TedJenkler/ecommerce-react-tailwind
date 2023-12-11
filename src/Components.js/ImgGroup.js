const ImgGroup = ( {img1, img2, img3, alt1, alt2, alt3} ) => {
    return (
        <section className="w-11/12 mb-32">
            <img className="h-40 w-full mb-5" src={img1} alt={alt1} />
            <img className="h-40 w-full mb-5" src={img2} alt={alt2} />
            <img className="h-96 w-full" src={img3} alt={alt3} />
        </section>
    )
}

export default ImgGroup