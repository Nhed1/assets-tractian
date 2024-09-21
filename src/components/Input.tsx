interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix?: React.ReactElement
}

export function Input({ ...props }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        className="block w-full  border-b border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        {...props}
      />

      {props.sufix && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
          {props.sufix}
        </span>
      )}
    </div>
  )
}
