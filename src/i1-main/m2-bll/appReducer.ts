import { InferActionsType } from './help'
import {UserType} from "../../i2-features/f2-account/a1-ui/Account";

const initialState = {
    isAuth: false,
    data: undefined as UserType | undefined
}

export const appReducer = (
    state = initialState,
    action: AppActionsType
): typeof initialState => {
    switch (action.type) {
        case 'app/SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.isAuth,
                data: action.data,
            }
        }

        default: {
            return state
        }
    }
}

export type AppActionsType = InferActionsType<typeof AppActions>

export const AppActions = {
    setIsAuth: (isAuth: boolean, data?: UserType) => ({
        type: 'app/SET_IS_AUTH',
        isAuth,
        data,
    } as const),

}

// export const signIn = (
//     email: string, password: string
// ): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, LoginActionsType> => async (
//     dispatch,
//     // getStore: GetAppStoreType
// ) => {
//     dispatch(LoginActions.setLoading(true))
//
//     await tryCatch(
//         async () => {
//             dispatch(LoginActions.setLoading(true))
//             const data = await LoginAPI.signIn(email, password)
//
//             dispatch(LoginActions.setSuccess(true))
//             // dispatch(ProfileActions.setUser(data))
//
//             setTimeout(() => {
//                 dispatch(LoginActions.setSuccess(false))
//             }, 500)
//
//             console.log('winter-orbit, Login Success!', data)
//         },
//         (e) => dispatch(LoginActions.setError(e)),
//         'Login',
//     )
// }
