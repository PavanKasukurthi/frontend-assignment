import Ethereum from '../assets/Ethereum.svg'
import Algorand from '../assets/Algorand.svg'
import Avalanche from '../assets/Avalanche.svg'
import Cardano from '../assets/Cardano.svg'
import ChainLink from '../assets/Chainlink.svg'
import { useState } from 'react'

const CryptoCoins = () => {
  interface Coin {
    id: number
    name: string
    src: string
  }

  const [selectedItems, setSelectedItems] = useState<Coin[]>([])

  const coins: Coin[] = [
    { id: 1, name: 'Ethereum', src: Ethereum },
    { id: 2, name: 'Avalanche', src: Avalanche },
    { id: 3, name: 'Cardano', src: Cardano },
    { id: 4, name: 'ChainLink', src: ChainLink },
    { id: 5, name: 'Algorand', src: Algorand },
  ]

  function handleItemClick(coin: Coin) {
    if (selectedItems.includes(coin)) {
      setSelectedItems(selectedItems.filter((i) => i !== coin))
    } else {
      setSelectedItems([...selectedItems, coin])
    }
  }

  return (
    <div>
      <ul className="grid grid-cols-5 gap-4 mb-7 mr-1 overflow-hidden ">
        {Array(5)
          .fill(coins)
          .map((coin, index) => {
            return (
              <li>
                <div
                  key={index}
                  onClick={() => handleItemClick(coin)}
                  className={`flex justify-center flex-col align-middle border-2 border-[#ffffff0d] p-2 w-24 rounded-lg cursor-pointer ${
                    selectedItems.includes(coin)
                      ? `border border-gray-500 rounded-xl bg-gradient-to-b from-[#9E44FF40] to-[#543EFF40]`
                      : ''
                  }`}
                >
                  <img src={`${coin.src}`} alt={coin.name} className="h-9" />
                  <p className="text-center">{coin.name}</p>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
export default CryptoCoins
