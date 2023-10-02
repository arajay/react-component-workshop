import { PropsWithChildren } from 'react'

export interface MyProps {
  list: string[];
}

export const ListComponent = ({ list }: PropsWithChildren<MyProps>) => {
  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  )
}