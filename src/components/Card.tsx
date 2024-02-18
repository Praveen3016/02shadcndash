import { LucideIcon } from 'lucide-react'
import React from 'react'

export type CardProps = {
label : string;
icon : LucideIcon;
amount : string;
desc : string;  
}

export default function Card(props: CardProps) {
  return (
    <div className='w-full flex flex-col gap-3 rounded-xl border p-5 shadow'>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.label}helo</p>
        {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.desc}</p>
      </section>
    </div>
  );
}

//  export function CardContent(props : React.HTMLAttributes<HTMLDivElement>)
//  {
//   return (
//     <div
//     className='w-full flex flex-col gap-3 rounded-xl border p-5 shadow' />
 
//   )
//  }
