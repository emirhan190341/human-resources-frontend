import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { ReactNode } from "react";

type Props = {
  style?: React.CSSProperties;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const MUIModal = ({ style, open, handleClose, children }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default MUIModal;
