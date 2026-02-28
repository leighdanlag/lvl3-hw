import iphone from '../assets/iphone.jpg'
import ipadlogo from '../assets/ipadairtext.png'
import ipadair from '../assets/ipadair.jpg'
import appletvbg from '../assets/appletvbg.jpg'
import appletvlogo from '../assets/appletv.png'

export const Banners = () => {
    return (
        <div className="flex flex-col w-screen gap-2 bg-white">
            <Section title="iPhone" 
            description="Say hello to the latest generation of iPhone" 
            buttonTxt="Shop iPhone"
            backgroundImage={iphone} />

            <Section logo={ipadlogo}
            description="Now supercharged by the M3 chip."
            buttonTxt="Buy"
            backgroundImage={ipadair}
            logoOffset="-mt-75"/>

            <Section logo={appletvlogo}
            description="Monsters collide. Season 2 is here."
            buttonTxt="Stream now"
            backgroundImage={appletvbg}
            hideLearnMore
            pushDown />

        </div>
    )
}

type SectionProps = {
    title?: string,
    logo?: string,
    description: string,
    buttonTxt: string,
    image?: string,
    backgroundImage?: string,
    hideLearnMore?: boolean,
    pushDown?: boolean,
    logoOffset?: string,
}

const Section = ({title, logo, description, buttonTxt, image, backgroundImage, hideLearnMore, pushDown, logoOffset} : SectionProps) => {
    return (
        <div className={`flex flex-col justify-center items-center h-[650px] w-full text-black bg-gray-100 gap-4 ${backgroundImage ? 'bg-cover bg-center bg-norepeat' : 'bg-gray-100'}`}
            style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        >
            {title && <h1 className="font-semibold -mt-80 !text-6xl">{title}</h1>}
            {logo && <img src={logo} className={`h-15 ${logoOffset ?? ''}`} />}
            <h2 className={pushDown ? 'mt-100 text-white text-4xl' : 'text-3xl'}>{description}</h2>
            <div className="flex gap-3">
                {!hideLearnMore && <button className="text-white rounded-full !bg-blue-500">Learn more</button>}
                <button className="rounded-full !bg-white text-blue-500 !border-blue-500 border-2">{buttonTxt}</button>
            </div>
            {image && <img src={image}/>}
        </div>
    )
}