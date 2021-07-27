import React from 'react'
import MenuItem from './MenuItem'
import { selectDirectory } from '../redux/slices/directory.reducer'
import { useAppSelector } from '../redux/hooks'

import styles from '../styles/Directory.module.scss'


const Directory: React.FC = () => {
    const selections = useAppSelector(selectDirectory)

    return (
        <div className={styles.directory}>
            {
                selections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}

export default Directory;