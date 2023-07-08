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
      <div className="bg-gradient-to-tr to-[#dceaf9] from-[#f7ede9] via-[#e9e8fb] py-24 h-52 rounded-lg">
        fds
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
