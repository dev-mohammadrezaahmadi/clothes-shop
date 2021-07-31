import React from 'react'
import MenuItem from './MenuItem'
import { selectDirectory } from '../redux/slices/directory.reducer'
import { useAppSelector } from '../redux/hooks'

const Directory: React.FC = () => {
    const selections = useAppSelector(selectDirectory)

    return (
        <div style={{ height: '90%' }} className="flex flex-col sm:grid sm:border-0 gap-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row sm:grid-flow-col sm:overflow-auto flex-wrap overflow-x-scroll border-2 border-black shadow-sm">
            {
                selections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}

export default Directory;