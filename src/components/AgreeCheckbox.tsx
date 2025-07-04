import { useState } from 'react';

type AgreeCheckboxProps = {
  text?: string;
};

export function AgreeCheckbox({ text = 'Clique para concordar com os termos' }: AgreeCheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="absolute flex items-start"
      style={{
        top: '480px',
        left: '496px',
        width: '365px',
        height: '34px',
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="appearance-none w-[18px] h-[16px] rounded-sm cursor-pointer"
        style={{
          backgroundColor: '#BEBBB9',
          border: '1px solid #999',
        }}
      />

      {/* Texto */}
      <label
        className="text-white text-sm leading-tight cursor-pointer select-none text-[14px] font-inter"
        style={{
          width: '247px',
          height: '34px',
        }}
        onClick={() => setChecked(!checked)}
      >
        {text}
      </label>
    </div>
  );
}
