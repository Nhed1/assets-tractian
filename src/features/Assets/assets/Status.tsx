export function Status({ isError = true }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill={isError ? '#ED3833' : '#52C41A'} />
    </svg>
  )
}
