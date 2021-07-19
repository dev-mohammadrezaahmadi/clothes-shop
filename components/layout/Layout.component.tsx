import Header from '../header/Header.component';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout
