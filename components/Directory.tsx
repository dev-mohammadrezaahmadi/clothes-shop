import React from 'react'
import MenuItem from './MenuItem'
import { DirectoryTypes } from '../data/directory.data'
interface DirectoryProps {
    selections: DirectoryTypes[]
}

const Directory: React.FC<DirectoryProps> = ({ selections }) => {
    return (
        <div style={{ height: '90%' }} className="flex flex-col sm:grid sm:border-0 gap-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row sm:grid-flow-col sm:overflow-auto flex-wrap overflow-x-scroll border-2 border-black shadow-sm">
            {
                selections.map((selction, i) => (
                    <MenuItem key={i} {...selction} />
                ))
            }
        </div>
    )
}

export default Directory;