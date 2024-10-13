import { AppShell, Group, Tabs, Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import SongsContainer from '@/components/SongList/SongsContainer';
import FormPage from '@/components/SongForm/FormPage';
import { useState } from 'react';

export function HomePage() {
  const [currentTab, setCurrentTab] = useState<string | null>("list")
  return (
    <AppShell
      ta="center"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true } }}
      padding="md"
    >
      <Tabs variant='outline' defaultValue="list" onChange={setCurrentTab} >
        <AppShell.Header withBorder={false} >
          <Tabs.List >
            <Group justify="space-around" style={{ flex: 1 }}>
              <Group>
                <Tabs.Tab value="list" leftSection={<p>🎙</p>}>
                  lista
                </Tabs.Tab>
                <Tabs.Tab value="form" leftSection={<p>📥</p>}>
                  dodawanie
                </Tabs.Tab>
                <ColorSchemeToggle />
              </Group>
            </Group>
          </Tabs.List>
        </AppShell.Header>
        <AppShell.Main >
          <Container size="lg">
            <Tabs.Panel value="list">
              <SongsContainer />
            </Tabs.Panel>
            <Tabs.Panel value="form">
              <FormPage active={currentTab == "form"} />
            </Tabs.Panel>
          </Container>
        </AppShell.Main>
      </Tabs>
    </AppShell>
  );
}
