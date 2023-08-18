import * as Select from '../components/Select'

export default function SearchResultsPage() {
  return (
    <div className="mt-40 flex flex-col px-8">
      <div className="flex items-center justify-between">
        <span className="text-xl font-normal text-ateneo">
          Encontre <strong className="font-extrabold">324 amigos</strong> na sua
          cidade
        </span>
        <Select.Root className="bg-grey text-ateneo">
          <Select.Control
            options={[
              { label: 'Gatos e Cachorros', value: 'dogs-and-cats' },
              { label: 'Gatos', value: 'cats' },
              { label: 'Cachorros', value: 'dogs' },
            ]}
            name="filter-pet-type"
          />
        </Select.Root>
      </div>
    </div>
  )
}
