import { EntriesState } from './';


type EntriesActionType = 
   | { type: '[Entries] - ActionEntries' } 


export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): NameState => {

   switch (action.type) {
    //   case '[Entries] - ActionEntries':
    //      return {
    //         ...state,
    //       }

       default:
          return state;
   }

}