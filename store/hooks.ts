import { useSelector, useDispatch } from "react-redux";
import type { IAppRootState, IAppDispatch } from "./index";

export const useAppSelector = useSelector.withTypes<IAppRootState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();