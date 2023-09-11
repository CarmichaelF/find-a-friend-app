'use client'

import {
  ChangeEvent,
  ComponentProps,
  DragEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { FormLabel } from '../FormLabel'
import { Cloud } from '../../icons/Cloud'
import { removeDuplicatesFromArray } from '@/utils/remove-duplicates-from-array'
import { File } from '../../icons/File'
import { CloseSquare } from '../../icons/CloseSquare'
import { PlusButton } from '../../PlusButton'
import { toast } from 'react-toastify'

interface FormFileInputProps extends ComponentProps<'input'> {
  label?: string
  onUpload(files: File[]): void
}

enum DragState {
  INACTIVE = 'inactive',
  DRAGGING = 'dragging',
}

export const FormFileInput = ({
  label,
  onUpload,
  ...props
}: FormFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([] as File[])
  const [dragState, setDragState] = useState<DragState>(DragState.INACTIVE)
  const [isDragging, setIsDragging] = useState(false)

  const id = useId()

  // Drag/Drop handling functions
  const preventDefaultBehaviour = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    ev.stopPropagation()
  }

  const handleOnDragOver = (ev: DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(ev)
    setDragState(DragState.DRAGGING)
  }

  const handleOnDragLeave = (ev: DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(ev)
    setDragState(DragState.INACTIVE)
  }

  const handleOnDrop = (ev: DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(ev)
    setDragState(DragState.INACTIVE)

    handleSetFiles(ev.dataTransfer.files)
  }
  // Drag/Drop handling functions

  const handleSetFiles = (fileList: FileList) => {
    const newFiles = [...fileList]

    setFiles((prevState) => {
      const { filteredArray, hadDuplicates } = removeDuplicatesFromArray<File>(
        [...prevState, ...newFiles],
        'name',
      )

      if (hadDuplicates)
        toast.warning(
          'Nome duplicado encontrado, por favor verifique os arquivos adicionados.',
        )
      return filteredArray
    })
  }

  const handleOnFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files === null) return
    handleSetFiles(ev.target.files)
  }

  const handleAddFile = () => {
    inputRef.current?.click()
  }

  const handleDeleteFile = (name: string) => {
    const filesCopy = [...files]
    const fileToBeDeletedIndex = filesCopy.findIndex(
      (file) => file.name === name,
    )

    if (fileToBeDeletedIndex === -1) return

    filesCopy.splice(fileToBeDeletedIndex, 1)

    setFiles(filesCopy)
  }

  useEffect(() => {
    setIsDragging(dragState === DragState.DRAGGING)
  }, [dragState])

  useEffect(() => {
    onUpload(files)
  }, [files])

  return (
    <div>
      <label htmlFor={id} className="flex flex-col gap-2">
        {label && <FormLabel as="span">{label}</FormLabel>}
        <div
          onDragOver={handleOnDragOver}
          onDragLeave={handleOnDragLeave}
          onDrop={handleOnDrop}
          data-is-dragging={isDragging}
          className="flex h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-light-grey bg-grey text-ateneo transition data-[is-dragging=true]:bg-opal-400 data-[is-dragging=true]:text-white"
        >
          <input
            onChange={handleOnFileChange}
            type="file"
            onClick={(e) => (e.currentTarget.value = '')}
            id={id}
            ref={inputRef}
            hidden
            {...props}
          />
          <Cloud className="pointer-events-none text-inherit" />
          <span className="pointer-events-none text-lg font-semibold text-inherit">
            Arraste e solte o(s) arquivo(s)
          </span>
        </div>
      </label>
      <div className="flex flex-col gap-10">
        <div className="mt-4 flex flex-col gap-2">
          {files &&
            [...files].map((file) => (
              <div
                className="flex h-12 min-w-full items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl border border-light-grey px-3"
                key={file.name}
              >
                <File />
                <span className="text-sm font-normal text-ateneo">
                  {file.name}
                </span>
                <button
                  className="ml-auto"
                  type="button"
                  onClick={() => handleDeleteFile(file.name)}
                >
                  <CloseSquare className="text-opal" />
                </button>
              </div>
            ))}
        </div>
        <PlusButton onClick={handleAddFile} />
      </div>
    </div>
  )
}
