import { Accordion, Center, Skeleton } from '@mantine/core';
import { useState } from 'react';


function SongList({ songsList }: { songsList: { title: string, author: string, link: string }[] }) {
    const [openAccordion, setOpenAccordion] = useState('')

    const items = songsList.map((song) => {
        const songKey = `${song.author} - ${song.title}`
        const width = Math.min(window.innerWidth - 90, 560)
        const height = Math.min(window.innerWidth - 200, 315)

        return (
            <Accordion.Item key={songKey} value={songKey} >
                <Accordion.Control>{songKey}</Accordion.Control>
                <Accordion.Panel >
                    <Center style={{ position: "relative" }}>
                        {openAccordion === songKey && <><iframe
                            width={width}
                            height={height}
                            src={`https://www.youtube.com/embed/${song.link?.split('watch?v=')[1] ?? ''}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                            <Skeleton style={{ zIndex: -1, position: "absolute" }} height={height} width={width} radius="lg" />
                        </>
                        }
                    </Center>
                </Accordion.Panel>
            </Accordion.Item>
        )
    });

    return (
        <Accordion transitionDuration={300} variant="default" radius="xs" chevronPosition="left" onChange={(e) => setOpenAccordion(prevVal => e ?? prevVal)} >
            {items}
        </Accordion>
    );
}

export default SongList