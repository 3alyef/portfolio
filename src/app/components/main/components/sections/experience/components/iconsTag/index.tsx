interface PropsIcon {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    onClick?: (link: string) => void;
    link?: string;
}

export default function Icon({className, style, children, onClick, link}: PropsIcon) {
    return(
        <span className={`iconTag flex items-center justify-center p-3 ${className} text-[22px] bg-[#a1bdc957] text-black`}
        style={{...style, borderRadius: "100%"}} onClick={()=>onClick && link && onClick(link)}>
            {children}
        </span>
    )
}