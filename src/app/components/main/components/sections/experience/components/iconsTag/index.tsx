interface PropsIcon {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function Icon({className, style, children}: PropsIcon) {
    return(
        <span className={`iconTag flex items-center justify-center p-3 ${className} text-[22px] bg-[#a1bdc957] text-black`}
        style={{...style, borderRadius: "100%"}}>
            {children}
        </span>
    )
}