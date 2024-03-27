// rootReducer cấu hình persist cho các reducer
// redux persist giúp mình có thể tùy chọn lưu hoặc ko lưu state nào của reducer dưới loccalstorage
// khi reload trang thì ko bị đổi giá trị

import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist"

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist:['isLogin','token']
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig,authReducer),
  user:userReducer
})

export default rootReducer
