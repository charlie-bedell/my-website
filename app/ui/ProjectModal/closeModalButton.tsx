interface CloseModalButtonProps {
  closeModalHandler: (e: any) => void
}

const CloseModalButton: React.FC<CloseModalButtonProps> = ({closeModalHandler}) => {
  return (
	  <button
					onClick={(e) => {closeModalHandler(e)}}
					className="flex justify-center items-center font-bold px-4 text-black border border-black rounded-tr-xl">X</button>
	)
}

export default CloseModalButton;
