import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";

export default function About({ locale, style }: PropsSection) {
    return (
        <DefaultBody locale={locale} style={style} id="about" className="flex justify-center items-center"> 
            <section>
                <h1 className="text-[50px] font-[700] text-wrap">

                </h1>
                <div className="flex flex-col justify-center items-center w-full">
                    <p>
                    </p>
                    <p>
                    </p>
                </div>
            </section>
        </DefaultBody>
    )
}