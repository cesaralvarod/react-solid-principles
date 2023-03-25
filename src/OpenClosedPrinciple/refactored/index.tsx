import { FC, ReactNode } from 'react'

type TitleProps = {
  title: string
  children: ReactNode | ReactNode[]
}

const Title: FC<TitleProps> = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

type TitleWithLinkProps = {
  title: string
  href: string
  buttonText: string
}

export const TitleWithLinkProps: FC<TitleWithLinkProps> = ({
  title,
  href,
  buttonText,
}) => {
  return (
    <Title title={title}>
      <div>
        <a href={href}>{buttonText}</a>
      </div>
    </Title>
  )
}

type TitleWithNormalButton = {
  title: string
  children: ReactNode | ReactNode[]
  onClick: () => void
}

export const TitleWithNormalButton: FC<TitleWithNormalButton> = ({
  title,
  children,
  onClick,
}) => {
  return (
    <Title title={title}>
      <button onClick={onClick}>{children}</button>
    </Title>
  )
}

export default Title
