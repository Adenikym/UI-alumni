export default Overall = () => {
    return(

        <div className="flex justify-center items-center h-screen">
            <div className="w-2/3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg p-8">
                <h2 className="text-white text-3xl font-bold mb-6 text-center">
                Overall Amount Realized So Far
                </h2>
                <div className="w-full bg-white rounded-full overflow-hidden">
                <div className="bg-green-500 h-2 w-1/2"></div>
                </div>
                <div className="flex justify-between mt-4">
                <div className="text-white font-bold text-lg">50%</div>
                <div className="text-white font-bold text-lg">$162.5M</div>
                </div>
                <p className="text-white font-bold mt-4 text-center">
                Total overall amount received is $162.5M
                </p>
            </div>
        </div>

    )
}