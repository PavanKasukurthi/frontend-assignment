import user from '../assets/user.svg'
import reload from '../assets/reload.svg'
import questionMark from '../assets/questionMark.svg'

const CreateLot = () => {
  return (
    <div className="flex justify-center mt-40 ">
      <section className="w-[598px] h-[380px] justify-center border rounded-2xl  p-6 bg-[#1b1e33] space-y-6">
        {/* most played and ? */}
        <div className="flex justify-between ">
          <p className="text-white w-[116px] py-1.5 text-center align-middle text-[14px] leading-[17.5px] h-[34px] bg-[#14172B] border-[1px] rounded-[10px] font-['Bai Jamjuree'] ">
            Most Played
          </p>

          <img src={questionMark} alt="" />
        </div>

        {/* user reload user */}
        <div className="flex justify-between ">
          <span>
            <img src={user} alt="user1 logo" />
          </span>
          <span>
            <img src={reload} alt="Reload" />
          </span>
          <span>
            <img src={user} alt="user2 logo" />
          </span>
        </div>

        {/* Multi User lot */}
        <div>
          <p className="decoration-8 text-white text-left mb-0  ">
            Multi-user Lot
          </p>
          <p className="text-slate-400 text-left mt-0">
            In this lot multiple people will bet against you. The condition for
            the lot to start is both sides should have equal funds.
          </p>
        </div>

        <button className="w-[550px] h-[40px] bg-purple-500 rounded-full mb-4 text-white  font-[700] my-56">
          Create Lot
        </button>
      </section>
    </div>
  )
}
export default CreateLot
