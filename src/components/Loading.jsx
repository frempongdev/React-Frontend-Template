import '../loader.css'
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="rounded-full h-20 w-20 bg-orange-700 animate-ping"></div>
        </div>
    )
}

export default Loading