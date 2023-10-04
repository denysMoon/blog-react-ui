import { ChangeEvent, useState } from "react";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./styled";
import { useAppDispatch } from "@/store/dispatch";
import { useSelector } from "react-redux";
import {
  setThemeMode,
  userSettings,
} from "@/store/userSettings/userSettingsSlice";
import { selectedUser } from "@/store/auth/authSlice";
import { useMount } from "@/hooks/useMount";

// IT IS VERY TEMPORARY SOLUTION

export const SwitchTheme = () => {
  const { themeMode } = useSelector(userSettings);
  const { user } = useSelector(selectedUser);
  const dispatch = useAppDispatch();
  const [switchState, setSwitchState] = useState(true);

  useMount(() => {
    if (themeMode === "dark") {
      setSwitchState(false);
    } else {
      setSwitchState(true);
    }
  });

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!user) return;
    if (event.target.checked) {
      dispatch(setThemeMode({ themeMode: "light", userId: user?.id }));
      setSwitchState(true);
    } else {
      dispatch(setThemeMode({ themeMode: "dark", userId: user?.id }));
      setSwitchState(false);
    }
  };

  console.log(switchState);

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={switchState}
          onChange={handleSwitchChange}
        />
      }
      label=""
    />
  );
};
