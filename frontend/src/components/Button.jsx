export default function Button({onClick, children, className, disabled}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-fit mt-4 rounded bg-dark-brown hover:bg-dark-brown/90 active:bg-dark-brown/80 transition px-4 py-2 text-white-bg text-lg text-center font-semibold disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
