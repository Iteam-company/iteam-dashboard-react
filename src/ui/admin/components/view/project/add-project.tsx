import { Button } from "@mui/material";
import { FC } from "react";
import { EditModal } from "../../../../components/common/modals/edit-user/modal";

type Props = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

export const AddProject:FC<Props> = ({handleOpen, handleClose, open}) => {
	return (
		<>
			<Button variant='contained' onClick={handleOpen}>
				add new project
			</Button>
			<EditModal open={open} handleClose={handleClose} />
		</>
	);
};
