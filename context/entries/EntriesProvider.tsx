import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum consequuntur',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Consequat do veniam veniam et fugiat consectetur.',
            status: 'in-progress',
            createdAt: Date.now() - 10000000,
        },
        {
            _id: uuidv4(),
            description: 'Ullamco commodo nisi non enim amet consequat sunt voluptate.',
            status: 'complete',
            createdAt: Date.now() -10000,
        }
    ],
}


export const EntriesProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}; 