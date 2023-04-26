import Ethereum from '../assets/Ethereum.svg'
// import Algorand from '../assets/Algorand.svg'
import Avalanche from '../assets/Avalanche.svg'
// import Cardano from '../assets/Cardano.svg'
// import ChainLink from '../assets/Chainlink.svg'
import close from '../assets/close.svg'
import vs from '../assets/vs.svg'
import { Link,  useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LotCreated from './LotCreated'

const TakePosition = () => {
  //   console.log(new Date().toISOString().substring(0, 10))

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setFormSubmitted(true)
  }

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/ChooseAsset')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center ">
        <section className="h-[675px] w-[589px] bg-[#1b1e33] text-white p-6 justify-center rounded-xl space-y-5 my-5">
          <section className="flex justify-between max-h-[80vh]">
            <p className="decoration-8 text-left mb-0  ">Multi-user Lot</p>
            <Link to="/">
              <img className="cursor-pointer" src={close} alt="close logo" />
            </Link>
          </section>
          <section className="flex justify-center align-middle ">
            <div className="h-2 w-[34rem] bg-[#ffffff0d] absolute"></div>
          </section>
          <p className="text-center">Take Position</p>

          <section className="flex justify-between items-center text-slate-400">
            <section className="flex flex-col space-y-3 bg-[#14172B] px-14 py-3 rounded-md">
              <p className="text-sm ">Your Asset</p>
              <img src={Ethereum} alt="Ethereum" className="h-10" />
              <p className="text-sm ">Ethereum</p>
            </section>

            <section>
              <img src={vs} alt="v/s" className="w-14 h-14" />
            </section>

            <section className="flex flex-col space-y-3 bg-[#14172B] px-10 py-3 rounded-md">
              <p className="text-sm ">Opposing Asset</p>
              <img src={Avalanche} alt="Avalanche" className="h-10" />
              <p className="text-sm  text-center">Avalanche</p>
            </section>
          </section>

          {formSubmitted && (
            <div className="flex justify-center">
              <LotCreated />
            </div>
          )}

          <section className="font-medium space-y-8">
            <div className="flex flex-col space-y-3">
              <label htmlFor="fund">Fund your Pool (Ethereum)</label>
              <input
                type="number"
                id="fund"
                placeholder="$"
                className="bg-[#14172B] rounded-2xl px-4 py-2 invalid:border-red-500 inBtn"
                min={0}
                required
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label htmlFor="">Lot Starts on</label>
              <input
                type="date"
                name="lotStart"
                id="lotStart"
                placeholder={`${new Date().toISOString().substring(0, 10)}`}
                className="bg-[#14172B] rounded-2xl px-4 py-2"
                required
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label htmlFor="">Lot Ends on</label>
              <input
                type="date"
                name="lotEnd"
                id="lotEnd"
                placeholder={new Date().toISOString().substring(0, 10)}
                className="bg-[#14172B] rounded-2xl px-4 py-2"
                required
              />
            </div>
          </section>

          <section className="flex justify-evenly items-center mt-5">
            <button
              type="reset"
              className="px-20 py-2 border-2 border-white rounded-2xl"
              onClick={goBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="px-20 py-2 bg-gradient-to-b from-[#9E44FF] to-[#543EFF] rounded-full text-white "
            >
              Create Lot
            </button>
          </section>
        </section>
      </div>
    </form>
  )
}
export default TakePosition
