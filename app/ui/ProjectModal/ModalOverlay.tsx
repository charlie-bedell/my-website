import React, { ReactNode } from "react";

interface ModalOverlayProps {
	children: ReactNode,
	// eslint-disable-next-line no-unused-vars
	closeModalHandler: (e: any) => void
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ closeModalHandler, children }) => {
	return (
		<div onClick={(e: any) => closeModalHandler(e)}className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
			{children}
		</div>
	)
}

export default ModalOverlay;
