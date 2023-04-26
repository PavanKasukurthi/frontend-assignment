import close from '../assets/close.svg'
import CryptoCoins from './CryptoCoins'
import search from '../assets/search.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ChooseAsset = () => {
  const headings = ['Crypto', 'Indexes', 'Stocks', 'Commodities', 'Forex']

  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [assetA, setAssetA] = useState<number | null>(null)
  const [assetB, setAssetB] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setSelectedItem(index)
    console.log(selectedItem)

    setAssetA(index)
    console.log(assetA)
  }

  return (
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
        <p className="text-center">Choose your Asset</p>
        <input
          type="text"
          name=""
          id=""
          className="border w-[550px] h-[40px] rounded-2xl"
          placeholder={`   Search Token eg. ETH, Gold etc`}
        />

        {/* Headings */}
        <div>
          <ul className="grid grid-cols-5 text-center ">
            {/* <li>
              <p className="border-2 cursor-pointer text-center rounded-lg">
                Crypto
              </p>
            </li>
            <li className="cursor-pointer">Indexes</li>
            <li className="cursor-pointer">Stocks</li>
            <li className="cursor-pointer">Commodities</li>
            <li className="cursor-pointer">Forex</li> */}
            {headings.map((heading, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`cursor-pointer ${
                    selectedItem === index
                      ? `border border-gray-500 rounded-xl bg-gradient-to-b from-[#9E44FF40] to-[#543EFF40]`
                      : ''
                  }`}
                >
                  {heading}
                </li>
              )
            })}
          </ul>
        </div>
        {/* Crypto coins */}
        <div className="h-[22rem] overflow-y-scroll scrollbar ">
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
          <CryptoCoins />
        </div>
        <div className="mb-4">
          <Link to="/TakePosition">
            <button className="w-[550px] h-[40px] bg-gradient-to-b from-[#9E44FF] to-[#543EFF]  rounded-full  text-white font-[700] ">
              Next
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
export default ChooseAsset
