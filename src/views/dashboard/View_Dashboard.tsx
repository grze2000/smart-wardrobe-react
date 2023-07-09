import {
  ActionIcon,
  Box,
  Button,
  FileButton,
  Group,
  Modal,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { ApiErrorData } from 'app/api/axios'
import {
  CreateClothingFormFields,
  CreateClothingResponse,
  addClothing,
  createClothingSchema,
} from 'app/api/clothes/addClothing'
import { useGetClothes } from 'app/api/clothes/getClothes'
import { uploadClothingImage } from 'app/api/clothes/uploadClothingImage'
import { useGetWeather } from 'app/api/weather/getWeather'
import { useFormMutation } from 'app/hooks'
import { AxiosError } from 'axios'
import { InputSelect, InputSubmit, InputText } from 'components/form/input'
import { InputColor } from 'components/form/input/InputColor'
import { useEffect, useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useSearchParams } from 'react-router-dom'

const colors = ['#f1f6fa', '#f9f4f3', '#f5f5f5', '#fcf4ef']
const categories = [
  {
    value: 'bluzy',
    label: 'Bluzy',
  },
  {
    value: 'spodnie',
    label: 'Spodnie',
  },
  {
    value: 'koszule',
    label: 'Koszule',
  },
  {
    value: 'sukienki',
    label: 'Sukienki',
  },
  {
    value: 'tshirts',
    label: 'T-shirty',
  },
  {
    value: 'kurtki',
    label: 'Kurtki',
  },
  {
    value: 'garnitury',
    label: 'Garnitury',
  },
  {
    value: 'spodnice',
    label: 'Spódnice',
  },
  {
    value: 'buty',
    label: 'Buty',
  },
  {
    value: 'czapki',
    label: 'Czapki',
  },
  {
    value: 'rekawiczki',
    label: 'Rękawiczki',
  },
  {
    value: 'plaszcze',
    label: 'Płaszcze',
  },
  {
    value: 'dzinsy',
    label: 'Dżinsy',
  },
  {
    value: 'bluzki',
    label: 'Bluzki',
  },
  {
    value: 'spodenki',
    label: 'Spodenki',
  },
]

const Dashboard = () => {
  const [searchParams] = useSearchParams()
  const { data: clothes, refetch } = useGetClothes(
    searchParams.get('category') as string,
  )
  const { data: weather } = useGetWeather()
  console.log(weather)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSuccess = () => {
    setIsModalOpen(false)
    refetch()
  }

  const onError = (error: AxiosError<ApiErrorData>) => {
    showNotification({
      title: 'Wystąpił błąd',
      message: error.response?.data.message,
      color: 'red',
      icon: <ImCross />,
    })
  }

  const { methods, handleSubmit } = useFormMutation<
    CreateClothingFormFields,
    CreateClothingResponse
  >(createClothingSchema, addClothing, { onSuccess, onError })

  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (!file) return
    const data = uploadClothingImage(file)
    // methods.setValue('photoUrl', data?.url as string)
    console.log(data)
  }, [file])

  return (
    <Box className="flex flex-1 flex-col gap-4 px-4">
      <Group position="apart">
        <Group>
          <h1 className="text-3xl">Dashboard</h1>
        </Group>
      </Group>
      <div className="bg-gradient-to-tr to-[#dceaf9] from-[#f7ede9] via-[#e9e8fb] min-h-52 rounded-lg flex flex-col sm:flex-row p-4 gap-4">
        <div className="grow">
          <div className="text-4xl">Słonecznie, 22°C</div>
          <div className="sm:mt-4">Brak prognozowanych opadów</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            Ubierz się lekko i przewiewnie
          </div>
          <Button>Zobacz propozycje</Button>
        </div>
      </div>
      <h1 className="text-3xl flex gap-3 items-center">
        Moje ubrania{' '}
        <ActionIcon
          className="inline-block"
          variant="light"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus />
        </ActionIcon>
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap pb-10">
        {clothes?.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <h2 className="text-xl">Brak wyników</h2>
          </div>
        )}
        {clothes?.map((clothing, index) => (
          <div
            style={{
              backgroundColor: colors[index % 4],
            }}
            className={`rounded-lg sm:basis-[calc(25%-1rem)] p-4 flex flex-col gap-3`}
          >
            <img
              src={clothing.photoUrl}
              alt=""
              className="w-full aspect-square rounded object-contain"
            />
            <h2 className="font-bold">{clothing.name}</h2>
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
          </div>
        ))}
      </div>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Dodaj ubranie"
        withinPortal={true}
        className="!z-[9999]"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputText name="name" label="Nazwa" required />
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button {...props}>Wybierz zdjęcie</Button>}
            </FileButton>
            <InputColor name="colors" withPicker withPreview />
            <InputSelect
              name="type"
              label="Kategoria"
              placeholder="Wybierz kategorię"
              data={categories}
            />
            <InputSubmit value="Dodaj" />
          </form>
        </FormProvider>
      </Modal>
    </Box>
  )
}

export default Dashboard
