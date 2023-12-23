const ImgGroup = ( {img1, img2, img3, alt1, alt2, alt3} ) => {
    return (
        <section className="flex flex-col w-11/12 mb-32 md:flex-row lg:w-full">
            <div className="md:flex md:flex-col justify-between">
                <img className="h-40 w-full mb-5 object-cover rounded-lg md:h-44 lg:min-full" src={img1} alt={alt1} />
                <img className="h-40 w-full mb-5 object-cover rounded-lg md:mb-0 md:h-44 lg:min-w-full" src={img2} alt={alt2} />
            </div>
            <img className="h-96 w-full object-cover rounded-lg md:w-1/2 md:ml-5 lg:min-w-1/2" src={img3} alt={alt3} />
        </section>
    )
}

export default ImgGroup