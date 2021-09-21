import css from './Layout.module.css'

const Layout = (props) => {
  return (
    <main className={css.main}>{props.children}</main>
  )
}

export default Layout;