import macbookpro from '../assets/macbookprobg.jpg'
import watch11logo from '../assets/watch11logo.png'
import watchbg from '../assets/watchbg.jpg'
import watchbandlogo from '../assets/watchbandlogo.png'
import watchbandbg from '../assets/watchbandbg.jpg'
import airpodbg from '../assets/airpodbg.jpg'
import tradeinlogo from '../assets/tradeinlogo.png'
import tradeinbg from '../assets/tradeinbg.jpg'
import applecardlogo from '../assets/applecard.png'
import applecardbg from '../assets/applecardbg.jpg'

export const Panels = () => {
    return (
        <div className="grid grid-cols-2 gap-2 pl-2 pr-2 bg-white pt-3">
            <Panel title="MacBook Pro 14″" 
            white 
            description="Supercharged by M5." 
            backgroundImage={macbookpro}
            buttonTxt1="Learn more" 
            buttonTxt2="Buy"/>
            
            <Panel logo={watch11logo} 
            description="The ultimate way to watch your health."
            backgroundImage={watchbg}
            buttonTxt1="Learn more"
            buttonTxt2="Buy"
            logoOffset='mt-8'/>

            <Panel logo={watchbandlogo}
            white
            hideLearnMore
            description="The new Black Unity band.
            Inspired by the power of connection."
            backgroundImage={watchbandbg}
            buttonTxt2="Shop"
            logoOffset='mt-8'/>

            <Panel title="AirPods Pro 3"
            description="The world's best in ear
            Active Noise Cancellation."
            backgroundImage={airpodbg}
            buttonTxt1='Learn more'
            buttonTxt2='Buy'
            />

            <Panel logo={tradeinlogo}
            description="Get up to $180—$650
            in credit when you trade in 
            iPhone 13 or higher"
            hideLearnMore
            backgroundImage={tradeinbg}
            buttonTxt2='Get your estimate'
            logoOffset='mt-8'
            />

            <Panel logo={applecardlogo}
            description="Get up to 3% Daily Cash back
            with every purchase."
            buttonTxt1='Learn more'
            buttonTxt2='Apply now'
            backgroundImage={applecardbg} 
            logoOffset='mt-14'/>
        </div>

    )
}

type PanelProps = {
    title?: string,
    white?: boolean,
    logo?: string,
    description: string,
    backgroundImage: string,
    buttonTxt1?: string,
    buttonTxt2: string,
    hideLearnMore?: boolean,
    logoOffset?: string,
}

const Panel = ({title, white, logo, description, backgroundImage, buttonTxt1, buttonTxt2, hideLearnMore, logoOffset}: PanelProps) => {
    return (
        <div className={`flex flex-col items-center h-[580px] bg-cover bg-center bg-no-repeat gap-3.5`}
        style={{ backgroundImage: `url(${backgroundImage})`}} >
            {title && <h1 className={`font-semibold mt-8 !text-5xl ${white ? 'text-white' : 'text-black'}`}>{title}</h1>}
            {logo && <img src={logo} className={`h-10 ${logoOffset ?? ''}`} />}
            <h2 className={`text-2xl whitespace-pre-line text-center ${white ? 'text-white' : 'text-black'}`}>{description}</h2>
            <div className="flex gap-3">
                {!hideLearnMore && <button className="text-white rounded-full !bg-blue-500">{buttonTxt1}</button>}
                <button className={`rounded-full ${white ? '!bg-black' : '!bg-white'} text-blue-500 !border-blue-500 border-2`}>{buttonTxt2}</button>
            </div>
        </div>
    )
}