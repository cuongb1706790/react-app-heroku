import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NotListedLocation } from "@material-ui/icons";
import React from "react";
import { Controls } from "./controls/Controls";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

function ConfirmDialog({ confirm, setConfirm }) {
  const classes = useStyles();

  return (
    <Dialog open={confirm.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocation />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirm.title}</Typography>
        <Typography variant="subtitle2">{confirm.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Controls.Button
          text="No"
          color="default"
          onClick={() => setConfirm({ ...confirm, isOpen: false })}
        />
        <Controls.Button
          text="Yes"
          color="secondary"
          onClick={confirm.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
