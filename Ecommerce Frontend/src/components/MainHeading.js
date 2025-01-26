
const MainHeading = ({ title, subtitle }) => {
    return (
        <div className="main_top_heading">
            <h3 className="mb-4">
                <span className="text-pink">{title.split(' ')[0]} </span>
                <span >{title.split(' ').slice(1).join(' ')}</span>
            </h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default MainHeading
