type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputSenha(props: InputProps) {
  return (
    <div
  className="absolute flex flex-col"
  style={{
    top: '489px',
    left: '412px',
  }}
>
    <input
    type="password"
    placeholder="SENHA"
    className="w-[398px] h-[43px] px-4 text-white placeholder-white-600 focus:outline-none"
    style={{
      backgroundColor: '#BEBBB9',
    }}
      {...props}
    />
    </div>
  );
}
