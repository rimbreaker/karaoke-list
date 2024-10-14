import SongList from "./SongList";
import songs from './songs.json'
import { SegmentedControl, TextInput, ScrollArea, CloseButton } from '@mantine/core';
import { useRef, useState } from "react";
import { debounce } from '../../utils'


const SongsContainer = () => {
    const baseSongs = Object.values(songs)
    const searchbarRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const [sortOption, setSortOption] = useState('autor')
    const [songValues, setSongValues] = useState(Object.values(baseSongs))

    if (searchbarRef.current?.value) {
        const query = searchbarRef.current?.value
        songValues.filter(song => song.author.includes(query) || song.title.includes(query))
    }
    const sortSongs = (sortInput?: string) => {

        if (sortInput) { setSortOption(sortInput) }
        const sortBy = sortInput ?? sortOption
        setSongValues(currSongs => currSongs.toSorted((a, b) =>
            sortBy === 'autor' ?
                a.author > b.author ? 1 : -1 :
                a.title > b.title ? 1 : -1
        ))
    }

    const filterSongs = () => {
        if (searchbarRef.current?.value) {
            const query = searchbarRef.current?.value
            setSongValues(
                baseSongs.filter(song =>
                    song.author.toUpperCase().includes(query.toUpperCase()) ||
                    song.title.toUpperCase().includes(query.toUpperCase())
                ))
        } else {
            setSongValues(baseSongs)
        }
        sortSongs()
    }

    return <>
        <form ref={formRef}>
            <TextInput
                leftSectionPointerEvents="none"
                leftSection="🔍"
                rightSection={
                    <CloseButton onClick={() => {
                        formRef.current?.reset();
                        filterSongs()
                    }} />
                }
                placeholder="szukaj"
                ref={searchbarRef}
                onChange={debounce(filterSongs, 200)}
            />
        </form>
        {songValues.length} wyników - sortuj wg:<SegmentedControl
            defaultValue="autor"
            onChange={sortSongs}
            data={['autor', 'tytuł']} />
        <ScrollArea h='75vh'>
            <SongList songsList={songValues as any} />
        </ScrollArea>
    </>
}

export default SongsContainer