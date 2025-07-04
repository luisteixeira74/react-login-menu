type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputEmail(props: InputProps) {
  return (
    <div
  className="absolute flex flex-col"
  style={{
    top: '220px',
    left: '440px',
  }}
>
    <input
    type="text"
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
