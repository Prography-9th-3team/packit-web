interface ITooltip {
  label: string;
}

const Tooltip = ({ label }: ITooltip) => {
  return (
    <div className='px-8 py-6 label-sm text-text rounded-lg whitespace-nowrap bg-surface shadow-layer'>
      {label}
    </div>
  );
};

export default Tooltip;
