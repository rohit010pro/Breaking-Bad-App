const ErrorPage = () => {

    const errorBox = {
        textAlign:"center", 
        padding:"200px"
    }
    
    const errorNum = {
        fontSize : "76px",
        fontWeight:900,
        marginBottom: "20px"
    }

    return (
        <div style={errorBox}>
            <h1 style={errorNum}>404</h1>
            <h2>Page Not Found</h2>
        </div>
    )
}

export default ErrorPage
