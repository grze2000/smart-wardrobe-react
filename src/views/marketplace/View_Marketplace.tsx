import { Box, Button } from '@mantine/core'
import { useGetClothes } from 'app/api/clothes/getClothes'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const colors = ['#f1f6fa', '#f9f4f3', '#f5f5f5', '#fcf4ef']

const Dashboard = () => {
  const [searchParams] = useSearchParams()
  const { data: clothes, refetch } = useGetClothes(
    searchParams.get('category') as string,
  )
  const navigate = useNavigate()

  return (
    <Box className="flex flex-1 flex-col gap-4 px-4">
      <h1 className="text-3xl flex gap-3 items-center">Marketplace</h1>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap pb-10">
        {clothes?.map((clothing, index) => (
          <div
            className={`bg-[${
              colors[index % 4]
            }] rounded-lg sm:basis-[calc(25%-1rem)] p-4 flex flex-col gap-3`}
          >
            <img
              src="https://ae01.alicdn.com/kf/H0e288fca496e41f1bbc98ca0b0ef4a45u/Smutne-Glitch-Vintage-bluzy-dla-m-czyzn-Yung-Lean-estetyczne-Vaporwave-smutne-ch-opcy-bluzy-z.jpg_.webp"
              alt=""
              className="w-full aspect-square"
            />
            <h2 className="font-bold flex justify-between">
              <span>{clothing.name}</span>
              <span>{clothing.value}$</span>
            </h2>
            <div className="flex">
              <span>{clothing.type}</span>
              <div className="flex gap-2 ml-auto">
                {clothing?.colors?.map((color) => (
                  <div
                    className="w-5 h-5 rounded-full shadow-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <Button
              onClick={() =>
                window.open(`https://google.com/?q=${clothing.name}`, '_blank')
              }
            >
              Zobacz oferty
            </Button>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default Dashboard
