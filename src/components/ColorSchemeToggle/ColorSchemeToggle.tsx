import { useMantineColorScheme, Switch, Text } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();
  const scheme = useColorScheme()

  return (
    <Switch size="md"
      color="dark.4"
      onLabel={<Text size='xl'>☀</Text>}
      offLabel={<Text size='xl'>🌙</Text>}
      onChange={toggleColorScheme}
      defaultChecked={scheme === "dark"}
    />
  );
}