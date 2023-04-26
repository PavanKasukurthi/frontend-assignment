import { Link } from 'react-router-dom'

const LotCreated = () => {
  return (
    <div className="flex justify-center text-center absolute border-white border-4 rounded-xl items-center">
      <div className=" flex flex-col justify-center space-y-4 py-4 px-4 sticky bg-[#1b1e33] text-white h-32 w-72 rounded-xl">
        <p>Your user lot has been created!</p>
        <Link to="/">
          <button className="px-20 py-2 bg-gradient-to-b from-[#9E44FF] to-[#543EFF] rounded-full">
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}
export default LotCreated
