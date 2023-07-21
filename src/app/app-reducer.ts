
export enum RequestStatus {
  "idle" = 0,
  "loading" = 1,
  "succeed" = 2,
  "failed" = 3,
}

const initialState = {
  headerTitle: "" as string,
  error: null as string | null,
  status: RequestStatus.idle as RequestStatus,

};

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "APP/SET-ERROR":
      return {
        ...state,
        error: action.errorMessage,
      };
    case "APP/SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "HEADER-PAGE-TITLE": 
      return{
        ...state,
        headerTitle: action.title
      };    
	default:
		 return state  
  }
};

// actions
export const setHeaderTitle = (title: string) => ({
  type: "HEADER-PAGE-TITLE",
  title
} as const)

export const setErrorStatus = (errorMessage: string | null) =>
  ({
    type: "APP/SET-ERROR",
    errorMessage,
  } as const);

export const setRequestStatus = (status: RequestStatus) =>
  ({
    type: "APP/SET-STATUS",
    status,
  } as const);

  

// types
type RequestStatusType = ReturnType<typeof setRequestStatus>;
type ErrorStatusType = ReturnType<typeof setErrorStatus>;
type HeaderTitleType = ReturnType<typeof setHeaderTitle>;

type ActionType = 
  | RequestStatusType 
  | ErrorStatusType 
  | HeaderTitleType 

export type InitialStateType = typeof initialState;
