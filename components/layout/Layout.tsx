import Header from '../Header';

const Layout: React.FC = ({ children }) => {
    return (
        <div style={{ height: '100vh' }} className="flex flex-col">
            <Header />
            <main style={{ height: "90%" }}>{children}</main>
        </div>
    )
}

export default Layout
