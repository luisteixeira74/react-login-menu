type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputEmail(props: InputProps) {
  return (
    <div
  className="absolute flex flex-col"
  style={{
    top: '399px',
    left: '412px',
  }}
>
    <input
    type="email"
    placeholder="E-MAIL"
    className="w-[398px] h-[49px] px-4 text-white placeholder-white-600 focus:outline-none"
    style={{
      backgroundColor: '#BEBBB9',
    }}
      {...props}
    />
    </div>
  );
}
