import { Box, Button, Typography } from "@mui/material";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmLogout = ({ onClose, onConfirm }: Props) => {
  return (
    <div>
      <Typography variant="h6" component="h2">
        Confirm Logout
      </Typography>
      <Typography sx={{ mt: 1 }}>Are you sure you want to logout?</Typography>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            background: "linear-gradient(to right bottom, #00AAFF, #00FFF3)",
          }}
          variant="contained"
          onClick={onClose}
          sx={{ mr: 2 }}
        >
          Cancel
        </Button>
        <Button
          style={{
            background: "linear-gradient(to right bottom, #FF0000, #FF8F00)",
          }}
          onClick={onConfirm}
          variant="contained"
          color="error"
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default ConfirmLogout;
