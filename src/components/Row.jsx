export default function Row({ bgColor, textColor, title, amount, children }) {
  return (
    <div className={`${bgColor} bg-opacity-10 p-3 rounded-lg flex flex-row justify-between text-sm`}>
      <div className={`flex gap-2 ${textColor} font-semibold`}>
        {children}
        <p>{title}</p>
      </div>
      <div className='flex gap-1'>
        <p className='font-semibold'>{amount}</p>
        <p>/</p>
        <p>100</p>
      </div>
    </div>
  )
}
