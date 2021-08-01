import React from 'react'
import MenuItem from './MenuItem'
import { DirectoryTypes } from '../data/directory.data'

import styles from '../styles/Directory.module.scss'

interface DirectoryProps {
    selections: DirectoryTypes[]
}

const Directory: React.FC<DirectoryProps> = ({ selections }) => {
    return (
        <div className={styles.directory}>
            {
                selections.map((selction, i) => (
                    <MenuItem key={i} {...selction} />
                ))
            }
        </div>
    )
}

export default Directory;