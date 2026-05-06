export interface NavLink {
    name: string;
    path: string
}
export interface card1 {
    img: string
    head: string
    text: string
    horizontalTop?:boolean
    horizontalBottom?:boolean
}
export interface TopSectionData{
    Img:string
    Text:string
}
export interface TopSection {
    textButton: string
    head: string
    text: string
    data?:Array<TopSectionData>
}
export interface card2 {
    img: string
    name: string
    text: string
}
export interface card3 {
    head: string
    text: string
}
export interface card5 extends card1 {
    head2: string
}
export interface rectangle{
    number:number
    text:string
    head:string
}
export interface FaqItemProps{
    answer:string
    question:string
    isOpen:boolean
    onToggle:()=>void
}
export interface rectangleAcademics{
     img:Array<string>
    head:string
    text:string
}
export interface inputContact{
    label?:string
    placeholder?:string
    typeElement?:string
    type?:string
    select1?:string
    select2?:string
    select3?:string
}

