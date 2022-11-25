

export const QouteBlock = ( { author, quote } ) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-4"> { quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
    )
}


