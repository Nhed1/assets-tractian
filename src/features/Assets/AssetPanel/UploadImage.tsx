import { useRef, useState } from 'react'
import { ImageIcon } from './assets/ImageIcon'

export function UploadImage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
    }
  }
  return (
    <div
      className={`relative flex h-[260px] w-[500px] cursor-pointer flex-col items-center justify-center rounded ${
        !imagePreview && 'border'
      }  border-dashed border-blue-500  bg-blue-50 text-blue-400`}
      onClick={handleDivClick}
    >
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {imagePreview ? (
        <>
          <img
            src={imagePreview}
            alt="Preview"
            className="absolute inset-0 size-full object-cover"
          />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <ImageIcon />
          <p className="text-center">Adicionar imagem do Ativo</p>
        </div>
      )}
    </div>
  )
}
