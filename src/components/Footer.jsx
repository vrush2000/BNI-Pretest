const Footer = () => {
    const date = (new Date().getFullYear())
    return (
        <footer className="footer sticky-bottom">
            <p className="copyright">
                &copy; {date} - PT Bank Negara Indonesia (Persero) Tbk
            </p>
        </footer>
    )
}

export default Footer