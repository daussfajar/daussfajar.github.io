const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="" style={{
                    fontSize: '10rem',
                }}>404</h1>
                <p className="text-2xl">
                    Page not found. Go back to{' '}
                    <a href="/" className="text-primary-dark dark:text-primary-light">
                        Home
                    </a>
                </p>
            </div>
        </>
    );
}

export default NotFound;